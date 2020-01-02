import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import {
  H4,
  H5,
  LocalDealTextField,
  AddressDisplay,
  View,
  TwinButton,
  RichTextEditor
} from "../../common";
import { Address } from "../../modal/deal";
import { Button } from "@material-ui/core";

export interface Props {
  currentAddress: Address;
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
    return this.props.useAutoPosition ? (
      <this.AddressAutoPositionDisplay />
    ) : (
      <this.AddressTextField />
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
      />
    );
  };

  DescriptionTextField = () => {
    return <RichTextEditor onChangeValue={this.props.onChangeRichTextValue} />;
  };

  HeaderSection = () => {
    let label = this.appContext.labels.createDealPage;
    return (
      <View isFlexDirectionRow={true}>
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

  TitleTextField = () => {
    return (
      <LocalDealTextField
        onChange={this.props.onChangeTitleTextField}
        text={this.appContext.labels.createDealPage.textFieldTitle}
      />
    );
  };
}

const styles = {
  headerContainer: {
    alignItems: "space-between"
  },
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20
  }
};
