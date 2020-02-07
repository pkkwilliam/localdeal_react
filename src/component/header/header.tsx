import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { HeaderView } from ".";
import { ReduxState } from "../../common/redux/reducers";
import CurrentArea from "../../modal/currentArea";
import { Address } from "../../modal/deal";
import { connect } from "react-redux";
import { AddressPrediction } from "../addressPrediction";

interface Props {
  addressesPrediction: Address[];
  position: CurrentArea;
  selectedAddress: Address;
}

interface State {
  isCreateDealDrawerOpen: boolean;
  useAutoLocation: boolean;
}

export class Header extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCreateDealDrawerOpen: false,
      useAutoLocation: true
    };
  }

  render() {
    return (
      <HeaderView
        isCreateDealDrawerOpen={this.state.isCreateDealDrawerOpen}
        onClickCreateDeal={this.onClickCreateDeal}
        onCloseCreateDeal={this.onCloseCreateDeal}
        onClickLocationButton={this.onClickLocationButton}
        selectedAddress={this.props.selectedAddress}
      />
    );
  }

  protected onClickCreateDeal = () => {
    // need to complete
    console.log("onClickCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: true
    });
  };

  protected onCloseCreateDeal = () => {
    console.log("onCloseCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: false
    });
  };

  protected onClickLocationButton = () => {
    // need to complete
    console.log("onClickLocationButton");
    this.setState({
      useAutoLocation: true
    });
  };
}

const mapStateToProps = (state: ReduxState): Props => ({
  addressesPrediction: state.addressesPrediction,
  position: state.position,
  selectedAddress: state.selectedAddress
});

export default connect(mapStateToProps)(Header);
