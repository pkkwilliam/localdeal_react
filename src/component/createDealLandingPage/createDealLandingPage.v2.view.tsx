import ApplicationComponent from "../../common/applicationComponent";
import React, { ReactNode, ChangeEvent } from "react";
import { View, styleSchema, PrimaryButton, MiniText } from "../../common";
import {
  Add as AddIcon,
  Close as CloseIcon,
  FolderOpen as FolderOpenIcon
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import TextField from "../../common/textField";

interface Props {
  allowNumberOfFile: number;
  files: string[];
  onAddFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (description: string) => void;
  onChangeTitle: (title: string) => void;
  onClickSaveDraft: () => void;
  onClickSubmit: () => void;
  onClose: () => void;
}

export default class CreateDealLandingPageV2View extends ApplicationComponent<
  Props
> {
  render() {
    return (
      <View style={styles.rootContainer}>
        <this.CloseButton />
        <this.FileSection />
        <this.Title />
        <this.Description />
        <this.BottomButtonSecton />
      </View>
    );
  }

  protected AddImageButton = () => {
    return (
      <this.Frame>
        <input
          accept="image/*"
          onChange={event => this.props.onAddFile(event)}
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button component="span" style={styles.addIconButton}>
            <AddIcon scale="big" style={styles.addIcon} />
          </Button>
        </label>
      </this.Frame>
    );
  };

  protected AddressSelectionSection = () => {};

  protected BottomButtonSecton = () => {
    return (
      <View isFlexDirectionRow style={styles.bottomButtonSectionContainer}>
        <this.DraftButton />
        <this.SubmitButton />
      </View>
    );
  };

  protected CloseButton = () => {
    return (
      <View style={styles.closeIconContainer}>
        <CloseIcon onClick={this.props.onClose} style={styles.closeIcon} />
      </View>
    );
  };

  protected Description = () => {
    return (
      // <textarea
      //   style={{ resize: "none", border: "none", width: "inherit" }}
      //   rows={6}
      //   placeholder={
      //     this.appContext.labels.createDealPageV2.descriptionPlaceHolder
      //   }
      // />
      <TextField
        multiline
        onChange={this.props.onChangeDescription}
        placeholder={
          this.appContext.labels.createDealPageV2.descriptionPlaceHolder
        }
        rows={6}
      />
    );
  };

  protected DraftButton = () => {
    return (
      <Button onClick={this.props.onClickSaveDraft} style={styles.draftButton}>
        <View style={styles.draftButtonContainer}>
          <FolderOpenIcon style={styles.draftIcon} />
          <MiniText color="secondary">
            {this.appContext.labels.createDealPageV2.saveDraft}
          </MiniText>
        </View>
      </Button>
    );
  };

  protected FileSection = () => {
    const images: ReactNode[] = this.props.files.map(image => (
      <this.ImageContainer image={image} />
    ));
    if (this.props.files.length < this.props.allowNumberOfFile) {
      images.push(<this.AddImageButton />);
    }
    return (
      <View isFlexDirectionRow style={styles.fileSectionContainer}>
        {images}
      </View>
    );
  };

  protected ImageContainer = ({ image }: { image: string }) => {
    return (
      <this.Frame>
        <img
          alt={"user-input"}
          src={image}
          style={{ ...styles.imageStyle, objectFit: "cover" }}
        />
      </this.Frame>
    );
  };

  protected Frame = ({ children }: { children: ReactNode }) => {
    return (
      <View border={1} style={styles.frameContainer}>
        {children}
      </View>
    );
  };

  protected SubmitButton = () => {
    return (
      <PrimaryButton onClick={this.props.onClickSubmit}>
        {this.appContext.labels.createDealPageV2.submitPost}
      </PrimaryButton>
    );
  };

  protected Title = () => {
    return (
      <TextField
        onChange={this.props.onChangeTitle}
        placeholder={this.appContext.labels.createDealPageV2.titlePlaceHolder}
      />
    );
  };
}

const styles = {
  addIcon: {
    color: styleSchema.color.greyTransparent,
    fontSize: "80"
  },
  addIconButton: {
    borderRadius: 10
  },
  bottomButtonSectionContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "inherit"
  },
  closeIcon: {
    color: styleSchema.color.greyDark
  },
  closeIconContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: 15,
    width: "inherit"
  },
  descriptionTextField: {
    marginTop: 10,
    width: "inherit"
  },
  draftButton: {
    padding: 0
  },
  draftButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  draftIcon: {
    backgroundColor: styleSchema.color.secondaryColorTransparent,
    borderRadius: 25,
    color: styleSchema.color.secondaryColor,
    fontSize: 16,
    marginBottom: 1,
    padding: 3
  },
  fileSectionContainer: {
    alignItems: "start",
    overflow: "scroll",
    paddingBottom: 10,
    paddingTop: 10,
    width: "inherit"
  },
  frameContainer: {
    alignItems: "center",
    borderColor: styleSchema.color.greyTransparent,
    borderRadius: 10,
    justifyContent: "center",
    margin: 5,
    maxHeight: 80,
    maxWidth: 80,
    minHeight: 80,
    minWidth: 80
  },
  imageStyle: {
    borderRadius: 10,
    minHeight: "inherit",
    minWidth: "inherit"
  },
  rootContainer: {
    width: "inherit"
  },
  titleTextField: {
    marginTop: 10,
    width: "inherit"
  }
};
