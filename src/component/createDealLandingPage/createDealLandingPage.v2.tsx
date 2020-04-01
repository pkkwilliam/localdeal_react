import React, { ChangeEvent } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageV2View } from "./";
import Deal from "../../modal/deal";
import { UPLOAD_IMAGE, CREATE_DEAL } from "../../common/middleware/service";

const ALLOWED_NUMBER_OF_FILE = 9;

interface Props {
  onClose: () => void;
}

interface State {
  files: string[];
  blobFiles: any[];
  description: string;
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
      title: ""
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
        onClickSaveDraft={this.onClickSaveDraft}
        onClickSubmit={this.onClickSubmit}
        onClose={this.props.onClose}
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

  protected onClickSaveDraft = () => {
    console.debug("onClickSaveDraft");
  };

  protected onClickSubmit = async () => {
    console.log(this.appState.deal.deals);
    console.debug("onClickSubmit");
    // upload all images in the state
    const result = await Promise.all(
      this.state.blobFiles.map(file => {
        const formData: FormData = new FormData();
        formData.append("image", file, "image");
        return this.appContext.serviceExecutor.execute(UPLOAD_IMAGE(formData));
      })
    );
    // check fields!!!!
    if (result) {
      console.log();
      const deal: Deal = {
        address: {
          area: "澳門",
          country: ""
        },
        description: this.state.description,
        filesUrl: result.map(url => url.url),
        serverIdentifierName: "MACAU", // TODO - this might not be correct!!!
        timestamp: 0,
        title: this.state.title
      };
      this.appContext.serviceExecutor.execute(CREATE_DEAL(deal));
    }
  };
}
