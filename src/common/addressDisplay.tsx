import React from "react";
import ApplicationComponent from "./applicationComponent";
import { Address } from "../modal/deal";
import { H5, View } from ".";

export interface Props {
  address: Address;
}

export default class AddressDisplay extends ApplicationComponent<Props> {
  render() {
    return (
      <View isFlexDirectionRow={true}>
        <H5>{this.generateAddressWithSpace(this.props.address)}</H5>
      </View>
    );
  }

  protected generateAddressWithSpace(address: Address): string {
    return address.formattedAddress || "";
  }

  protected removeNotValidAddress(input: string): string {
    return input ? `${input} ` : "";
  }
}
