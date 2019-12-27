import React from "react";
import ApplicationComponent from "./applicationComponent";
import { Button } from "@material-ui/core";
import { H5, View } from ".";

export interface Props {
  onClickPrimaryButton: () => void;
  onClickSecondaryButton: () => void;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
}

export default class TwinButton extends ApplicationComponent<Props> {
  render() {
    let {
      onClickPrimaryButton,
      onClickSecondaryButton,
      primaryButtonLabel,
      secondaryButtonLabel
    } = this.props;
    return (
      <View isFlexDirectionRow={true} style={styles.rootContainer}>
        <Button onClick={() => onClickPrimaryButton()} variant={"outlined"}>
          <H5>{primaryButtonLabel}</H5>
        </Button>
        <Button onClick={() => onClickSecondaryButton()} variant={"outlined"}>
          <H5>{secondaryButtonLabel}</H5>
        </Button>
      </View>
    );
  }
}

const styles = {
  rootContainer: {
    alignItem: "space-between"
  }
};
