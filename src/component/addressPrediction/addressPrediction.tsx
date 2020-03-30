import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { Address } from "../../modal/deal";

export default class AddressPrediction extends ApplicationComponent {
  render() {
    this.setDefaultSelectedAddress();
    return null;
  }

  protected setDefaultSelectedAddress() {
    if (
      this.appState.address.addressesPrediction.length > 0 &&
      !this.appState.address.selectedAddress?.area
    ) {
      this.onSelectAddress();
    }
  }

  protected onSelectAddress = (index: number = 0) => {
    if (this.appState.address.addressesPrediction) {
      const selectedAddress: Address = this.appState.address
        .addressesPrediction[index];
      this.appState.address.setSelectedAddress(selectedAddress);
    }
  };
}
