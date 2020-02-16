import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import {
  H4,
  H5,
  LocalDealTextField,
  AddressDisplay,
  View,
  TwinButton,
  RichTextEditor,
  styleSchema
} from "../../common";
import { Address } from "../../modal/deal";
import { Button } from "@material-ui/core";

export interface Props {
  currentAddress: Address;
  hasTitle: boolean;
  hasDescription: boolean;
  onChangeRichTextValue: (value: string) => void;
  onChangeTitleTextField: (value: string) => void;
  onClickClose: () => void;
  onClickSubmit: () => void;
  useAutoPosition: boolean;
}

export default class CreateDealLandingPageView extends ApplicationComponent<
  Props
> {
  render() {
    return (
      <View style={styles.rootContainer}>
        <this.HeaderSection />
        <this.AddressSection />
        <this.TitleTextField />
        <this.HourOfOperationSection />
        <this.DescriptionTextField />
        <this.ButtonSection />
      </View>
    );
  }

  AddressSection = () => {
    return (
      <View style={styles.addressSectionContainer}>
        {this.props.useAutoPosition ? (
          <this.AddressAutoPositionDisplay />
        ) : (
          <this.AddressTextField />
        )}
      </View>
    );
  };

  AddressAutoPositionDisplay = () => {
    return <AddressDisplay address={this.props.currentAddress} />;
  };

  AddressTextField = () => {
    return null;
  };

  ButtonSection = () => {
    let label = this.appContext.labels.createDealPage;
    return (
      <TwinButton
        onClickPrimaryButton={() => this.props.onClickSubmit()}
        onClickSecondaryButton={() => this.props.onClickClose()}
        primaryButtonLabel={label.create}
        secondaryButtonLabel={label.cancel}
        style={styles.buttonSection}
      />
    );
  };

  DescriptionTextField = () => {
    return (
      <View style={styles.descriptionContainer}>
        <this.DescriptionMissing />
        <RichTextEditor
          onChangeValue={this.props.onChangeRichTextValue}
          style={styles.richTextEditor}
        />
      </View>
    );
  };

  DescriptionMissing = () => {
    return this.props.hasDescription ? null : (
      <this.MissingContentText
        label={this.appContext.labels.createDealPage.descriptionMissing}
      />
    );
  };

  HeaderSection = () => {
    let label = this.appContext.labels.createDealPage;
    return (
      <View style={styles.headerContainer} isFlexDirectionRow={true}>
        <H4>{label.header}</H4>
        <Button onClick={() => this.props.onClickClose()}>
          <H5>{label.close}</H5>
        </Button>
      </View>
    );
  };

  HourOfOperationSection = () => {
    return null;
  };

  MissingContentText = ({ label }: { label: string }) => {
    return <H5 style={styles.missingContentText}>{label}</H5>;
  };

  TitleMissing = () => {
    return this.props.hasTitle ? null : (
      <this.MissingContentText
        label={this.appContext.labels.createDealPage.titleMissing}
      />
    );
  };

  TitleTextField = () => {
    return (
      <View style={styles.titleTextFiledContainer}>
        <this.TitleMissing />
        <LocalDealTextField
          onChange={this.props.onChangeTitleTextField}
          text={this.appContext.labels.createDealPage.textFieldTitle}
          style={styles.titleTextField}
        />
      </View>
    );
  };
}

const styles = {
  addressSectionContainer: {
    marginTop: 5,
    width: "inherit"
  },
  buttonSection: {
    margin: 10
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%"
  },
  missingContentText: {
    color: styleSchema.color.red,
    marginTop: 5
  },
  descriptionContainer: {
    marginTop: 10,
    width: "inherit"
  },
  richTextEditor: {
    marginTop: 5
  },
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  },
  titleTextField: {
    marginTop: 5
  },
  titleTextFiledContainer: {
    justifyContent: "center",
    marginTop: 10,
    width: "inherit"
  }
};
