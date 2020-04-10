import React, { Component } from "react";
import {
  default as MaterialUIModal,
  ModalProps,
} from "@material-ui/core/Modal";
import View from "./view";
import P from "./paragraph";
import { Button } from "@material-ui/core";
import { styleSchema } from "./stylesheet";
import H1 from "./h1";

interface Props extends ModalProps {
  onClickPrimaryButton?: () => void;
  onClickSecondaryButton?: () => void;
  primaryButtonMessage: string;
  message: string;
  secondaryButtonMessage?: string;
}

export default class Modal extends Component<Props> {
  render() {
    const props = this.props;
    return (
      <MaterialUIModal style={styles.rootContainer} {...this.props}>
        <View style={styles.contentContainer}>
          <View borderBottom={1} style={styles.messageTextContainer}>
            <H1>{props.message}</H1>
          </View>
          <View isFlexDirectionRow></View>
        </View>
      </MaterialUIModal>
    );
  }
}

const styles = {
  buttonStyle: {},
  contentContainer: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: styleSchema.color.white,
    justifyContent: "center",
    width: "inherit",
  },
  messageTextContainer: {
    alignItems: "center",
    borderColor: styleSchema.color.greyTransparent,
    padding: 35,
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
  PrimaryButton: {
    backgroundColor: styleSchema.color.primaryColor,
  },

  rootContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};
