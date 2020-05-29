import React, { Component } from "react";
import View from "./view";
import { styleSchema } from "./stylesheet";
import H1 from "./h1";
import TextButton from "./textButton";

interface Props {
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonMessage: string;
  message: string;
  secondaryButtonMessage?: string;
}

export default class AlertBox extends Component<Props> {
  render() {
    const props = this.props;
    return (
      <View style={styles.contentContainer}>
        <View style={styles.messageTextContainer}>
          <H1>{props.message}</H1>
        </View>
        <View borderTop={1} isFlexDirectionRow style={styles.buttonsContainer}>
          <this.ButtonSelection />
        </View>
      </View>
    );
  }

  ButtonSelection = () => {
    const props = this.props;
    if (props.primaryButtonMessage && props.secondaryButtonMessage) {
      return <></>;
    } else if (props.onClickPrimaryButton && props.primaryButtonMessage) {
      return (
        <TextButton
          buttonType="primary"
          onClick={props.onClickPrimaryButton}
          message={props.primaryButtonMessage}
        />
      );
    } else {
      return null;
    }
  };
}

const styles = {
  buttonsContainer: {
    alignItems: "center",
    borderColor: styleSchema.color.greyTransparent,
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
  button: {
    color: styleSchema.color.primaryColor,
    padding: 10,
    width: "inherit",
  },
  contentContainer: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: styleSchema.color.white,
    justifyContent: "center",
    outline: "none",
    width: "inherit",
  },
  messageTextContainer: {
    alignItems: "center",
    padding: 35,
    paddingBottom: 20,
    paddingTop: 20,
  },
};
