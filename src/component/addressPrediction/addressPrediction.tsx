import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { AddressPredictionView } from ".";
import { ReduxState } from "../../common/redux/reducers";
import { connect } from "react-redux";
import { Address, GetDealResponse } from "../../modal/deal";
import { setDeals, setSelectedAddress } from "../../common/redux/action";
import { GET_DEALS } from "../../common/middleware/service";

export interface Props {
  addressPrediction: Address[];
  isPositionLoading: boolean;
  selectedAddress: Address;
  setDeals?: any;
  setSelectedAddress?: any;
}

export class AddressPrediction extends ApplicationComponent<Props> {
  render() {
    this.setDefaultSelectedAddress();
    return null;
    // <AddressPredictionView
    //   addressPrediction={this.props.addressPrediction}
    //   isPositionLoading={this.props.isPositionLoading}
    //   onSelectAddress={this.onSelectAddress}
    // />
  }

  protected setDefaultSelectedAddress() {
    if (
      this.props.addressPrediction.length > 0 &&
      !this.props.selectedAddress.area
    ) {
      this.onSelectAddress();
    }
  }

  protected onSelectAddress = (index: number = 0) => {
    if (this.props.addressPrediction) {
      const selectedAddress: Address = this.props.addressPrediction[index];
      this.props.setSelectedAddress(selectedAddress);
      this.appState.address.setSelectedAddress(selectedAddress);
    }
  };
}

const mapStateToProps = (state: ReduxState): Props => ({
  addressPrediction: state.addressesPrediction,
  isPositionLoading: state.isLoadingPosition,
  selectedAddress: state.selectedAddress
});

export default connect(mapStateToProps, { setDeals, setSelectedAddress })(
  AddressPrediction
);
