import React, { Component } from "react";
import {
  default as MaterialUIModal,
  ModalProps,
} from "@material-ui/core/Modal";
import AlertBox from "./alertBox";

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
        <AlertBox
          onClickPrimaryButton={props.onClickPrimaryButton}
          onClickSecondaryButton={props.onClickSecondaryButton}
          primaryButtonMessage={props.primaryButtonMessage}
          message={props.message}
          secondaryButtonMessage={props.secondaryButtonMessage}
        />
      </MaterialUIModal>
    );
  }
}

const styles = {
  rootContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
};
