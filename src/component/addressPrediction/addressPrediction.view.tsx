import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { Address } from "../../modal/deal";
import { FormControl, InputLabel, NativeSelect } from "@material-ui/core";
import { H4, View } from "../../common";

export interface Props {
  addressPrediction: Address[];
  isPositionLoading: boolean;
  onSelectAddress: (index?: number) => void;
}

export default class AddressPredictionView extends ApplicationComponent<Props> {
  render() {
    return (
      <View style={styles.rootContainer}>
        {this.props.isPositionLoading ? (
          <this.PositionLoading />
        ) : (
          <this.AddressPredictionSection />
        )}
      </View>
    );
  }

  AddressPredictionSection = () => {
    let addressPrediction: Address[] = this.props.addressPrediction
      ? this.props.addressPrediction
      : [];
    let addressPredictionOptions = addressPrediction.map(address => {
      return <option>{address.formattedAddress}</option>;
    });
    return (
      <FormControl>
        <InputLabel>{this.appContext.labels.position.currentArea}</InputLabel>
        <NativeSelect
          onChange={event =>
            this.props.onSelectAddress(event.target.selectedIndex)
          }
        >
          {addressPredictionOptions}
        </NativeSelect>
      </FormControl>
    );
  };

  GetValue = (name: any) => (event: any) => {};

  PositionLoading = () => {
    return <H4>{this.appContext.labels.position.loading}</H4>;
  };
}

const styles = {
  rootContainer: {
    marginTop: 15,
    width: "100%"
  }
};
