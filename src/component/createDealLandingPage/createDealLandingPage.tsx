import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageView } from ".";
import { Address } from "../../modal/deal";
import { GET_CURRENT_ADDRESS } from "../../common/middleware/service";

export interface Props {
  onClickClose: () => void;
}

export interface State {
  currentAddress: Address;
  useAutoPosition: boolean;
}

export default class CreateDealLandingPage extends ApplicationComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentAddress: {
        area: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        coordinate: { latitude: 0, longitude: 0 }
      },
      useAutoPosition: true
    };
  }

  render() {
    return (
      <CreateDealLandingPageView
        currentAddress={this.state.currentAddress}
        onChangeDescriptionTextField={this.onChangeDescriptionTextField}
        onChangeTitleTextField={this.onChangeTitleTextField}
        onClickClose={this.props.onClickClose}
        onClickSubmit={this.onClickSubmit}
        useAutoPosition={this.state.useAutoPosition}
      />
    );
  }

  componentDidMount() {
    this.appContext.serviceExecutor
      .execute(GET_CURRENT_ADDRESS({}))
      .then((currentAddress: Address) =>
        this.setState({
          currentAddress
        })
      );
  }

  protected onChangeDescriptionTextField = () => {
    // need to complete
    console.log("onChangeDescriptionTextField");
  };

  protected onChangeTitleTextField = () => {
    // need to complete
    console.log("onChangeTitleTextField");
  };

  protected onClickSubmit = () => {
    // need to complete
    console.log("onClickSubmit");
  };
}
