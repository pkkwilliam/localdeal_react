import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { CreateDealLandingPageView } from ".";
import Deal, { Address } from "../../modal/deal";
import { CREATE_DEAL } from "../../common/middleware/service";
import { ReduxState } from "../../common/redux/reducers";
import { connect } from "react-redux";

export interface Props {
  currentAddress: Address;
  onClickClose: () => void;
}

export interface State {
  richTextValue: string;
  title: string;
  useAutoPosition: boolean;
}

export class CreateDealLandingPage extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      richTextValue: "",
      title: "",
      useAutoPosition: true
    };
  }

  render() {
    return (
      <CreateDealLandingPageView
        currentAddress={this.props.currentAddress}
        onChangeRichTextValue={this.onChangeRichTextValue}
        onChangeTitleTextField={this.onChangeTitleTextField}
        onClickClose={() => this.props.onClickClose()}
        onClickSubmit={this.onClickSubmit}
        useAutoPosition={this.state.useAutoPosition}
      />
    );
  }

  protected onChangeRichTextValue = (richTextValue: string) => {
    console.log(richTextValue);
    this.setState({
      richTextValue
    });
  };

  protected onChangeTitleTextField = (title: string) => {
    console.log(title);
    this.setState({
      title
    });
  };

  protected onClickSubmit = () => {
    this.appContext.serviceExecutor.execute(CREATE_DEAL(this.generateDeal()));
  };

  protected generateDeal(): Deal {
    return {
      address: this.props.currentAddress,
      description: this.state.richTextValue,
      title: this.state.title
    };
  }
}

const mapStateToProps = (state: ReduxState) => ({
  currentAddress: state.selectedAddress
});

export default connect(mapStateToProps)(CreateDealLandingPage);
