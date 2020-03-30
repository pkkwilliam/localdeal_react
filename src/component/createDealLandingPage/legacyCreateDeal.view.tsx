import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import {
  H5,
  LocalDealTextField,
  AddressDisplay,
  View,
  RichTextEditor,
  styleSchema
} from "../../common";
import { Address } from "../../modal/deal";

export interface Props {
  currentAddress: Address;
  hasTitle: boolean;
  hasDescription: boolean;
  onChangeRichTextValue: (value: string) => void;
  onChangeTitleTextField: (value: string) => void;
  useAutoPosition: boolean;
}

export default class CreateDealLandingPageView extends ApplicationComponent<
  Props
> {
  render() {
    return (
      <>
        <this.AddressSection />
        <this.TitleTextField />
        <this.HourOfOperationSection />
        <this.DescriptionTextField />
      </>
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
