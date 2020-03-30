import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageView } from ".";
import Deal, { Address, GetDealResponse } from "../../modal/deal";
import { CREATE_DEAL, GET_DEALS } from "../../common/middleware/service";

interface Props {
  onClickClose: () => void;
}

export interface State {
  hasTitle: boolean;
  hasDescription: boolean;
  richTextValue: string;
  title: string;
  useAutoPosition: boolean;
}

export default class CreateDealLandingPage extends ApplicationComponent<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasTitle: true,
      hasDescription: true,
      richTextValue: "",
      title: "",
      useAutoPosition: true
    };
  }

  render() {
    return (
      <CreateDealLandingPageView
        currentAddress={this.appState.address.selectedAddress}
        hasDescription={this.state.hasDescription}
        hasTitle={this.state.hasTitle}
        onChangeRichTextValue={this.onChangeRichTextValue}
        onChangeTitleTextField={this.onChangeTitleTextField}
        onClickClose={() => this.props.onClickClose()}
        onClickSubmit={this.onClickSubmit}
        useAutoPosition={this.state.useAutoPosition}
      />
    );
  }

  protected onChangeRichTextValue = (richTextValue: string) => {
    this.setState({
      richTextValue
    });
  };

  protected onChangeTitleTextField = (title: string) => {
    this.setState({
      title
    });
  };

  protected onClickSubmit = async () => {
    await this.validateDescription();
    await this.validateTitle();
    if (
      this.state.hasDescription &&
      this.state.hasTitle &&
      this.appState.address.selectedAddress
    ) {
      await this.appContext.serviceExecutor.execute(
        CREATE_DEAL({
          address: this.appState.address.selectedAddress,
          description: this.state.richTextValue,
          serverIdentifierName: "", // TODO - this might not be correct!!!
          timestamp: 0,
          title: this.state.title
        })
      );
      this.props.onClickClose();
      await this.appContext.serviceExecutor
        .execute(GET_DEALS(this.appState.address.selectedAddress))
        .then((getDealResponse: GetDealResponse) =>
          this.appState.deal.setDeals(getDealResponse.deals)
        );
    }
  };

  protected validateDescription() {
    this.setState({
      hasDescription: this.state.richTextValue.length > 0
    });
  }

  protected validateTitle() {
    this.setState({
      hasTitle: this.state.title.length > 0
    });
  }
}
