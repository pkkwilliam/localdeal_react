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
    let addressPredictionOptions = this.props.addressPrediction.map(address => {
      return <option>{address.formattedAddress}</option>;
    });
    return (
      <FormControl>
        <InputLabel>{"Need Label - 所在地區"}</InputLabel>
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
    return <H4>{"Need Label - 我們正在努力為您讀取定位"}</H4>;
  };
}

const styles = {
  rootContainer: {
    marginTop: 15,
    width: "100%"
  }
};
