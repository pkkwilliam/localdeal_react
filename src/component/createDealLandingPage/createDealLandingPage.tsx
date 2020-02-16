import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageView } from ".";
import Deal, { Address, GetDealResponse } from "../../modal/deal";
import { CREATE_DEAL, GET_DEALS } from "../../common/middleware/service";
import { ReduxState } from "../../common/redux/reducers";
import { setDeals } from "../../common/redux/action";
import { connect } from "react-redux";

export interface Props {
  currentAddress: Address;
  onClickClose: () => void;
  setDeals?: any;
}

export interface State {
  hasTitle: boolean;
  hasDescription: boolean;
  richTextValue: string;
  title: string;
  useAutoPosition: boolean;
}

export class CreateDealLandingPage extends ApplicationComponent<Props, State> {
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
        currentAddress={this.props.currentAddress}
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
    if (this.state.hasDescription && this.state.hasTitle) {
      await this.appContext.serviceExecutor.execute(
        CREATE_DEAL(this.generateDeal())
      );
      this.props.onClickClose();
      await this.appContext.serviceExecutor
        .execute(GET_DEALS(this.props.currentAddress))
        .then((getDealResponse: GetDealResponse) =>
          this.props.setDeals(getDealResponse)
        );
    }
  };

  protected generateDeal(): Deal {
    return {
      address: this.props.currentAddress,
      description: this.state.richTextValue,
      serverIdentifierName: "", // TODO - this might not be correct!!!
      timestamp: 0,
      title: this.state.title
    };
  }

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

const mapStateToProps = (state: ReduxState) => ({
  currentAddress: state.selectedAddress
});

export default connect(mapStateToProps, { setDeals })(CreateDealLandingPage);
