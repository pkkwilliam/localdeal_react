import ApplicationComponent from "../../common/applicationComponent";
import React, { ReactNode, ChangeEvent } from "react";
import {
  View,
  styleSchema,
  PrimaryButton,
  MiniText,
  H5,
  P
} from "../../common";
import {
  Add as AddIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  FolderOpen as FolderOpenIcon,
  HelpOutline as HelpOutlineIcon,
  Room as LocationIcon
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import TextField from "../../common/textField";
import { Address } from "../../modal/deal";
import { FileDetail } from "../../modal/fileDetal";

interface Props {
  allowNumberOfFile: number;
  files: FileDetail[];
  hasAddress: boolean;
  hasField: boolean;
  onAddFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (description: string) => void;
  onChangeTitle: (title: string) => void;
  onClickAddress: (address: Address) => void;
  onClickRemoveSelectedAddress: () => void;
  onClickSaveDraft: () => void;
  onClickSubmit: () => void;
  onClose: () => void;
  selectedAddress?: Address;
}

export default class CreateDealLandingPageV2View extends ApplicationComponent<
  Props
> {
  render() {
    return (
      <View style={styles.rootContainer}>
        <this.Header />
        <this.FileSection />
        <this.Title />
        <this.Description />
        <this.AddressSelection />
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

  protected AddressSelection = () => {
    const addressDisplay = this.props.selectedAddress ? (
      <this.SelectedAddress />
    ) : (
      <this.AddressBubble />
    );
    return (
      <>
        <this.MissingSectionLabel
          hide={this.props.hasAddress}
          label={this.appContext.labels.createDealPageV2.missingAddress}
        />
        <View isFlexDirectionRow style={styles.addressSectionContainer}>
          <LocationIcon style={styles.locationIcon} />
          {addressDisplay}
        </View>
      </>
    );
  };

  protected AddressBubble = () => {
    const bubbles = this.appState.address.addressesPrediction.map(address => {
      return (
        <View
          border={1}
          onClick={() => this.props.onClickAddress(address)}
          style={{ ...styles.addressBubbleContainer, whiteSpace: "nowrap" }}
        >
          <P style={{ color: styleSchema.color.secondaryColor }}>
            {address.formattedAddress}
          </P>
        </View>
      );
    });
    return (
      <View isFlexDirectionRow style={styles.addressSelectionContainer}>
        {bubbles}
      </View>
    );
  };

  protected BottomButtonSecton = () => {
    return (
      <View isFlexDirectionRow style={styles.bottomButtonSectionContainer}>
        <this.DraftButton />
        <this.SubmitButton />
      </View>
    );
  };

  protected CloseButton = () => {
    return <CloseIcon onClick={this.props.onClose} style={styles.closeIcon} />;
  };

  protected Description = () => {
    return (
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
      <>
        <this.MissingSectionLabel
          hide={this.props.hasField}
          label={this.appContext.labels.createDealPageV2.missingField}
        />
        <View isFlexDirectionRow style={styles.fileSectionContainer}>
          {images}
        </View>
      </>
    );
  };

  protected Header = () => {
    return (
      <View isFlexDirectionRow style={styles.headerContainer}>
        <this.ImageDimensionTips />
        <this.CloseButton />
      </View>
    );
  };

  protected ImageContainer = ({ image }: { image: FileDetail }) => {
    return (
      <this.Frame>
        <img
          alt={"user-input"}
          src={image.base64Value}
          style={{ ...styles.imageStyle, objectFit: "cover" }}
        />
      </this.Frame>
    );
  };

  protected ImageDimensionTips = () => {
    return (
      <View isFlexDirectionRow style={styles.imageDimensionTipsContainer}>
        <HelpOutlineIcon style={styles.imageDimensionTipsIcon} />
        <H5>{this.appContext.labels.createDealPageV2.imageDimensionTips}</H5>
      </View>
    );
  };

  protected Frame = ({ children }: { children: ReactNode }) => {
    return (
      <View border={1} style={styles.frameContainer}>
        {children}
      </View>
    );
  };

  protected MissingSectionLabel = ({
    label,
    hide
  }: {
    label: string;
    hide: boolean;
  }) => {
    return hide ? null : (
      <P style={{ color: "red", fontWeight: "bold" }}>{label}</P>
    );
  };

  protected SelectedAddress = () => {
    return (
      <View isFlexDirectionRow style={styles.selectedAddressContainer}>
        <P style={styles.selectedAddressText}>
          {this.props.selectedAddress?.formattedAddress ?? ""}
        </P>
        <DeleteIcon
          onClick={this.props.onClickRemoveSelectedAddress}
          style={styles.deleteIcon}
        />
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
  addressBubbleContainer: {
    borderColor: styleSchema.color.secondaryColor,
    borderRadius: 30,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5
  },
  addressSelectionContainer: {
    overflow: "scroll",
    paddingBottom: 10
  },
  addressSectionContainer: {
    alignItems: "center",
    marginTop: 5,
    width: "inherit"
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
  deleteIcon: {
    color: styleSchema.color.greyDark
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
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    width: "inherit"
  },
  imageDimensionTipsContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  imageDimensionTipsIcon: {
    color: styleSchema.color.secondaryColor,
    fontSize: 18
  },
  imageStyle: {
    borderRadius: 10,
    minHeight: "inherit",
    minWidth: "inherit"
  },
  locationIcon: {
    color: styleSchema.color.red,
    marginLeft: -5,
    marginRight: 3,
    paddingBottom: 10
  },
  rootContainer: {
    width: "inherit"
  },
  selectedAddressContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    width: "inherit"
  },
  selectedAddressText: {
    color: styleSchema.color.black
  },
  titleTextField: {
    marginTop: 10,
    width: "inherit"
  }
};
