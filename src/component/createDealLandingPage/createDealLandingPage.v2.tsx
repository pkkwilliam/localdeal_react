import React, { ChangeEvent } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageV2View } from "./";
import Deal, { Address, GetDealResponse } from "../../modal/deal";
import { UPLOAD_IMAGE, CREATE_DEAL } from "../../common/middleware/service";
import { GET_DEALS } from "../../common/middleware/service";

const ALLOWED_NUMBER_OF_FILE = 9;

interface Props {
  onClose: () => void;
}

interface State {
  blobFiles: any[];
  dealCreateSuccess?: boolean;
  description: string;
  files: string[];
  selectedAddress?: Address;
  showToastMessage: boolean;
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
      showToastMessage: false,
      title: ""
    };
  }

  render() {
    return (
      <CreateDealLandingPageV2View
        allowNumberOfFile={ALLOWED_NUMBER_OF_FILE}
        dealCreateSuccess={this.state.dealCreateSuccess}
        files={this.state.files}
        onAddFile={this.onAddFile}
        onChangeDescription={this.onChangeDescription}
        onChangeTitle={this.onChangeTitle}
        onClickAddress={this.onClickAddress}
        onClickRemoveSelectedAddress={this.onClickRemoveSelectedAddress}
        onClickSaveDraft={this.onClickSaveDraft}
        onClickSubmit={this.onClickSubmit}
        onClose={this.props.onClose}
        onCloseToastMessage={this.onCloseToastMessage}
        selectedAddress={this.state.selectedAddress}
        showToastMessage={this.state.showToastMessage}
      />
    );
  }

  protected onAddFile = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("onAddImage");
    const fileList = event.target.files;
    if (fileList !== null) {
      for (let i = 0; i < fileList.length; i++) {
        this.convertImageToBase64(fileList[i]);
      }
    }
  };

  protected convertImageToBase64(image: File) {
    const fileReader: FileReader = new FileReader();
    fileReader.onload = changeEvent => {
      if (changeEvent.target && changeEvent.target.result) {
        this.setState({
          files: this.state.files.concat(changeEvent.target.result.toString())
        });
      }
      this.imageProcessor.compressImage(image).then(result => {
        console.debug("finish pushing into state");
        this.setState({
          blobFiles: this.state.blobFiles.concat(result)
        });
      });
    };

    fileReader.readAsDataURL(image);
  }

  protected onChangeDescription = (description: string) => {
    console.debug("onChangeDescription");
    this.setState({
      description
    });
  };

  protected onChangeTitle = (title: string) => {
    console.debug("onChangeTitle");
    this.setState({
      title
    });
  };

  protected onClickAddress = (selectedAddress: Address) => {
    console.debug("onClickAddress");
    this.setState({
      selectedAddress
    });
  };

  protected onClickRemoveSelectedAddress = () => {
    console.debug("onClickRemoveSelectedAddress");
    this.setState({
      selectedAddress: undefined
    });
  };

  protected onClickSaveDraft = () => {
    console.debug("onClickSaveDraft");
  };

  protected onClickSubmit = async () => {
    console.debug("onClickSubmit");
    // upload all images in the state
    const result = await Promise.all(
      this.state.blobFiles.map(file => {
        const formData: FormData = new FormData();
        formData.append("image", file, "image");
        return this.appContext.serviceExecutor.execute(UPLOAD_IMAGE(formData));
      })
    );
    if (result) {
      const deal: Deal = {
        address: this.state.selectedAddress,
        description: this.state.description,
        filesUrl: result.map(url => url.url),
        serverIdentifierName: this.state.selectedAddress?.area,
        timestamp: 0,
        title: this.state.title
      };
      this.appContext.serviceExecutor
        .execute(CREATE_DEAL(deal))
        .then(() => {
          setTimeout(() => {
            this.props.onClose();
          }, 2500);
          this.setState({
            showToastMessage: true,
            dealCreateSuccess: true
          });
          if (this.state.selectedAddress) {
            this.appContext.serviceExecutor
              .execute(GET_DEALS(this.state?.selectedAddress))
              .then((result: GetDealResponse) => {
                this.appState.deal.setDeals(result.deals);
              });
          }
        })
        .catch(() => {
          this.setState({
            showToastMessage: true,
            dealCreateSuccess: false
          });
        });
    }
  };

  protected onCloseToastMessage = () => {
    this.setState({
      showToastMessage: false
    });
  };
}
