import ApplicationComponent from "../../common/applicationComponent";
import React, { ReactNode, ChangeEvent } from "react";
import View from "../../common/view";
import PrimaryButton from "../../common/primaryButton";
import MiniText from "../../common/miniText";
import H5 from "../../common/h5";
import P from "../../common/paragraph";
import { styleSchema } from "../../common/stylesheet";
import Button from "@material-ui/core/Button";
import TextField from "../../common/textField";
import { Address } from "../../modal/deal";
import { FileDetail } from "../../modal/fileDetal";
import Icon from "../../common/icon";

interface Props {
  allowNumberOfFile: number;
  files: FileDetail[];
  hasAddress: boolean;
  hasField: boolean;
  isManualEnterAddress: boolean;
  manualEnterAddress: string;
  onAddFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (description: string) => void;
  onChangeManualEnterAddress: (address: string) => void;
  onChangeTitle: (title: string) => void;
  onClickAddress: (address: Address) => void;
  onClickManualEnterAddress: () => void;
  onClickRemoveImage: (imageIndex: number) => void;
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
          onChange={(event) => this.props.onAddFile(event)}
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button component="span" style={styles.addIconButton}>
            <Icon type="addLarge" />
          </Button>
        </label>
      </this.Frame>
    );
  };

  protected AddressSelection = () => {
    const labels = this.labels.createDealPageV2;
    let addressSelectionSection = null;
    if (this.props.isManualEnterAddress) {
      addressSelectionSection = <this.ManualEnterAddress />;
    } else if (this.props.selectedAddress) {
      addressSelectionSection = <this.SelectedAddress />;
    } else {
      addressSelectionSection = <this.AddressBubble />;
    }
    return (
      <>
        <this.MissingSectionLabel
          hide={this.props.hasAddress}
          label={
            this.props.isManualEnterAddress
              ? labels.addressNotDetailed
              : labels.missingAddress
          }
        />
        <View isFlexDirectionRow style={styles.addressSectionContainer}>
          <Icon type="location" />
          {addressSelectionSection}
          <this.RevertIcon />
        </View>
      </>
    );
  };

  protected AddressBubble = () => {
    const bubbles = this.appState.address.addressesPrediction.map((address) => {
      const onClickFunction = () => this.props.onClickAddress(address);
      return this.generateSelectionBubble(
        onClickFunction,
        address.formattedAddress ?? ""
      );
    });
    bubbles.unshift(
      this.generateSelectionBubble(
        this.props.onClickManualEnterAddress,
        this.labels.createDealPageV2.manualEnterAddress
      )
    );
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
    return <Icon onClick={this.props.onClose} type="close" />;
  };

  protected Description = () => {
    return (
      <TextField
        multiline
        onChange={this.props.onChangeDescription}
        placeholder={this.labels.createDealPageV2.descriptionPlaceHolder}
        rows={6}
      />
    );
  };

  protected DraftButton = () => {
    return (
      <Button onClick={this.props.onClickSaveDraft} style={styles.draftButton}>
        <View style={styles.draftButtonContainer}>
          <Icon type="folderOpen" />
          <MiniText color="secondary">
            {this.labels.createDealPageV2.saveDraft}
          </MiniText>
        </View>
      </Button>
    );
  };

  protected FileSection = () => {
    const images: ReactNode[] = this.props.files.map((image) => (
      <this.ImageContainer image={image} />
    ));
    if (this.props.files.length < this.props.allowNumberOfFile) {
      images.push(<this.AddImageButton />);
    }
    return (
      <>
        <this.MissingSectionLabel
          hide={this.props.hasField}
          label={this.labels.createDealPageV2.missingField}
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
        <Icon type="helpOutline" />
        <H5>{this.labels.createDealPageV2.imageDimensionTips}</H5>
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

  protected ManualEnterAddress = () => {
    return (
      <View style={styles.selectedAddressContainer}>
        <TextField
          onChange={this.props.onChangeManualEnterAddress}
          placeholder={this.labels.createDealPageV2.manualEnterAddress}
        />
      </View>
    );
  };

  protected MissingSectionLabel = ({
    label,
    hide,
  }: {
    label: string;
    hide: boolean;
  }) => {
    return hide ? null : (
      <P style={{ color: "red", fontWeight: "bold" }}>{label}</P>
    );
  };

  protected RevertIcon = () => {
    if (this.props.selectedAddress || this.props.isManualEnterAddress) {
      return (
        <Icon onClick={this.props.onClickRemoveSelectedAddress} type="revert" />
      );
    } else {
      return null;
    }
  };

  protected SelectedAddress = () => {
    return (
      <View isFlexDirectionRow style={styles.selectedAddressContainer}>
        <P style={styles.selectedAddressText}>
          {this.props.selectedAddress?.formattedAddress ?? ""}
        </P>
      </View>
    );
  };

  protected SubmitButton = () => {
    return (
      <PrimaryButton onClick={this.props.onClickSubmit}>
        {this.labels.createDealPageV2.submitPost}
      </PrimaryButton>
    );
  };

  protected Title = () => {
    return (
      <TextField
        onChange={this.props.onChangeTitle}
        placeholder={this.labels.createDealPageV2.titlePlaceHolder}
      />
    );
  };

  protected generateSelectionBubble(
    onClick: () => void,
    value: string,
    highLight?: boolean
  ) {
    return (
      <View
        border={1}
        onClick={onClick}
        style={{ ...styles.addressBubbleContainer, whiteSpace: "nowrap" }}
      >
        <P style={{ color: styleSchema.color.secondaryColor }}>{value}</P>
      </View>
    );
  }
}

const styles = {
  addIconButton: {
    borderRadius: 10,
  },
  addressBubbleContainer: {
    borderColor: styleSchema.color.secondaryColor,
    borderRadius: 30,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
  },
  addressSelectionContainer: {
    overflow: "scroll",
    paddingBottom: 5,
    paddingTop: 5,
  },
  addressSectionContainer: {
    alignItems: "center",
    marginTop: 5,
    width: "inherit",
  },
  bottomButtonSectionContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: "inherit",
  },
  descriptionTextField: {
    marginTop: 10,
    width: "inherit",
  },
  draftButton: {
    padding: 0,
  },
  draftButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  fileSectionContainer: {
    alignItems: "start",
    overflow: "scroll",
    paddingTop: 10,
    width: "inherit",
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
    minWidth: 80,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
    width: "inherit",
  },
  imageDimensionTipsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageDimensionTipsIcon: {
    color: styleSchema.color.secondaryColor,
    fontSize: 18,
  },
  imageStyle: {
    borderRadius: 10,
    minHeight: "inherit",
    minWidth: "inherit",
  },
  rootContainer: {
    width: "inherit",
  },
  selectedAddressContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "inherit",
  },
  selectedAddressText: {
    color: styleSchema.color.black,
  },
  titleTextField: {
    marginTop: 10,
    width: "inherit",
  },
};
