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
  onChangeDescriptionTextField: () => void;
  onChangeTitleTextField: () => void;
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
    return (
      <TwinButton
        onClickPrimaryButton={() => this.props.onClickSubmit()}
        onClickSecondaryButton={() => this.props.onClickClose()}
        primaryButtonLabel={"Need Label - 創建"}
        secondaryButtonLabel={"Need Label - 取消"}
      />
    );
  };

  DescriptionTextField = () => {
    return <RichTextEditor />;
  };

  HeaderSection = () => {
    return (
      <View isFlexDirectionRow={true}>
        <H4>{"Need Label - 創建Deal"}</H4>
        <Button onClick={() => this.props.onClickClose()}>
          <H5>{"Need Label - 關閉"}</H5>
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
        onChange={() => this.props.onChangeTitleTextField}
        text={"Need Label - 標題"}
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
