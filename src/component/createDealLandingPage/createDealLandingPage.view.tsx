import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { H1, H5, View, TwinButton, styleSchema } from "../../common";
import { Address } from "../../modal/deal";
import { Button } from "@material-ui/core";
import { LegacyCreateDealView } from ".";

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
        <this.ContentInput />
        <this.ButtonSection />
      </View>
    );
  }

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

  ContentInput = () => {
    const {
      currentAddress,
      hasTitle,
      hasDescription,
      onChangeRichTextValue,
      onChangeTitleTextField,
      useAutoPosition
    } = this.props;
    return (
      <LegacyCreateDealView
        currentAddress={currentAddress}
        hasTitle={hasTitle}
        hasDescription={hasDescription}
        onChangeRichTextValue={onChangeRichTextValue}
        onChangeTitleTextField={onChangeTitleTextField}
        useAutoPosition={useAutoPosition}
      />
    );
  };

  HeaderSection = () => {
    let label = this.appContext.labels.createDealPage;
    return (
      <View style={styles.headerContainer} isFlexDirectionRow={true}>
        <H1>{label.header}</H1>
        <Button onClick={() => this.props.onClickClose()}>
          <H5>{label.close}</H5>
        </Button>
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
    overflow: "hidden",
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
