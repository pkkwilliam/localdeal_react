import React, { ChangeEvent } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageV2View } from "./";
import Deal, { Address, GetDealResponse } from "../../modal/deal";
import {
  CREATE_DEAL,
  UPLOAD_IMAGE_SIGNED_URL,
  GET_PRESIGNED_URL,
  PRINT_FILE_DETAIL,
} from "../../common/middleware/service";
import { GET_DEALS } from "../../common/middleware/service";
import { FileUploadResponse } from "../../modal/fileUploadResponse";
import { FileDetail } from "../../modal/fileDetal";

const ALLOWED_NUMBER_OF_FILE = 9;

interface Props {
  onClose: () => void;
}

interface State {
  blobFiles: any[];
  description: string;
  files: FileDetail[];
  hasAddress: boolean;
  hasField: boolean;
  selectedAddress?: Address;
  title: string;
}

export default class CreateDealLandingPageV2 extends ApplicationComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      files: [],
      blobFiles: [],
      description: "",
      hasAddress: true,
      hasField: true,
      title: "",
    };
  }

  render() {
    return (
      <CreateDealLandingPageV2View
        allowNumberOfFile={ALLOWED_NUMBER_OF_FILE}
        files={this.state.files}
        onAddFile={this.onAddFile}
        onChangeDescription={this.onChangeDescription}
        onChangeTitle={this.onChangeTitle}
        onClickAddress={this.onClickAddress}
        onClickRemoveSelectedAddress={this.onClickRemoveSelectedAddress}
        onClickSaveDraft={this.onClickSaveDraft}
        onClickSubmit={this.onClickSubmit}
        onClose={this.props.onClose}
        hasAddress={this.state.hasAddress}
        hasField={this.state.hasField}
        selectedAddress={this.state.selectedAddress}
      />
    );
  }

  protected onAddFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.debug("onAddImage");
    const fileList = event.target.files;
    if (fileList !== null) {
      for (let i = 0; i < fileList.length; i++) {
        this.convertImageToBase64(fileList[i]);
      }
    }
  };

  protected async convertImageToBase64(image: File) {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = (changeEvent) => {
      if (changeEvent.target && changeEvent.target.result) {
        this.imageProcessor
          .fixRotation(changeEvent.target.result.toString())
          .then((fixedRotation) => {
            this.setState({
              files: this.state.files.concat({
                base64Value: fixedRotation,
                name: image.name,
                type: image.type,
              }),
            });
          });
      }
    };
    fileReader.readAsDataURL(image);
  }

  protected onChangeDescription = (description: string) => {
    console.debug("onChangeDescription");
    this.setState({
      description,
    });
  };

  protected onChangeTitle = (title: string) => {
    console.debug("onChangeTitle");
    this.setState({
      title,
    });
  };

  protected onClickAddress = (selectedAddress: Address) => {
    console.debug("onClickAddress");
    this.setState({
      selectedAddress,
    });
  };

  protected onClickRemoveSelectedAddress = () => {
    console.debug("onClickRemoveSelectedAddress");
    this.setState({
      selectedAddress: undefined,
    });
  };

  protected onClickSaveDraft = () => {
    console.debug("onClickSaveDraft");
  };

  protected onClickSubmit = async () => {
    console.debug("onClickSubmit");
    if (this.verifyInput()) {
      this.onSubmit();
    }
  };

  protected onSubmit = async () => {
    console.debug("start to submit a new deal");
    await this.appState.createDeal.setCreateDealUploading(true);
    this.props.onClose();
    const labels = this.appContext.labels.createDealPageV2;
    await this.appState.createDeal.setCreateDealProgressMessage(
      labels.uploadingImage
    );
    const imageUploadResult = await Promise.all(
      this.state.files.map(async (file) => {
        const imageBlob: File = await this.imageProcessor.imagePrecprocess(
          file.base64Value
        );
        const fileName = imageUploadResult.url.substring(
          imageUploadResult.url.lastIndexOf("/") + 1,
          imageUploadResult.url.lastIndexOf("?")
        );
        const myNewFile = new File([imageBlob], fileName, {
          type: imageBlob.type,
        });
        const fileUploadResponse: FileUploadResponse = await this.appContext.serviceExecutor.execute(
          GET_PRESIGNED_URL(file.type, file.name)
        );
        this.appContext.serviceExecutor.execute(
          PRINT_FILE_DETAIL(
            `file:type-${file.type} file:name-${file.name} fileUploadResponse.preSignedUrl-${fileUploadResponse.preSignedUrl} image.blob.name${myNewFile.name} image.blob.type-${myNewFile.type}`
          )
        );
        await this.appContext.serviceExecutor.execute(
          UPLOAD_IMAGE_SIGNED_URL(
            myNewFile,
            fileUploadResponse.preSignedUrl ?? ""
          )
        );
        return fileUploadResponse.url;
      })
    )
      .then((url) => url)
      .catch((ex) =>
        this.appContext.serviceExecutor.execute(
          PRINT_FILE_DETAIL(`upload file error ${ex}`)
        )
      );

    await this.appState.createDeal.setCreateDealProgressMessage(
      labels.uploadingDeal
    );
    const createDeal: Deal = {
      address: this.state.selectedAddress,
      description: this.state.description,
      filesUrl: imageUploadResult.map((url: any) => url ?? ""),
      serverIdentifierName: this.state.selectedAddress?.area,
      timestamp: 0,
      title: this.state.title,
    };
    await this.appContext.serviceExecutor.execute(CREATE_DEAL(createDeal));
    if (this.state.selectedAddress) {
      await this.appContext.serviceExecutor
        .execute(GET_DEALS(this.state.selectedAddress))
        .then((result: GetDealResponse) => {
          this.appState.deal.setDeals(result.deals);
        })
        .then(() => {
          setTimeout(() => {
            this.appState.createDeal.setCreateDealUploading(false);
          }, 2500);
        })
        .catch(() => {
          console.debug("something weng wrong while creating deal");
        });
    }
    await this.appState.createDeal.setCreateDealProgressMessage(
      labels.uploadCompleted
    );
  };

  protected verifyInput(): boolean {
    const state = this.state;
    let hasAddress = state.selectedAddress !== undefined;
    let hasField: boolean =
      state.title !== "" || state.description !== "" || state.files.length > 0;
    this.setState({
      hasAddress,
      hasField,
    });
    return hasAddress && hasField;
  }
}
