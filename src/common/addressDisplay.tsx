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
    let { street1, street2, city, state, zipCode, country } = address;
    // return `
    // ${this.removeNotValidAddress(street1 || "")}
    // ${this.removeNotValidAddress(street2 || "")}
    // ${this.removeNotValidAddress(city || "")}
    // ${this.removeNotValidAddress(state || "")}
    // ${this.removeNotValidAddress(zipCode || "")}
    // ${this.removeNotValidAddress(country)}`;
    return address.formattedAddress || "";
  }

  protected removeNotValidAddress(input: string): string {
    return input ? `${input} ` : "";
  }
}
