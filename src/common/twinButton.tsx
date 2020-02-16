import React from "react";
import ApplicationComponent from "./applicationComponent";
import { Button } from "@material-ui/core";
import { H5, View } from ".";
import { styleSchema } from "./stylesheet";

export interface Props {
  onClickPrimaryButton: () => void;
  onClickSecondaryButton: () => void;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  style?: any;
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
      <View
        isFlexDirectionRow={true}
        style={{ ...styles.rootContainer, ...this.props.style }}
      >
        <Button
          onClick={() => onClickPrimaryButton()}
          style={styles.primaryButton}
          variant={"outlined"}
        >
          <H5 style={styles.primaryButtonText}>{primaryButtonLabel}</H5>
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
    justifyContent: "space-around",
    marginLeft: 20,
    marginRight: 20,
    width: "inherit"
  },
  primaryButton: {
    backgroundColor: styleSchema.color.primaryColor
  },
  primaryButtonText: {
    color: styleSchema.color.white
  }
};
