import React, { Component } from "react";
import {
  default as MaterialUIModal,
  ModalProps,
} from "@material-ui/core/Modal";

export default class Modal extends Component<ModalProps> {
  render() {
    return (
      <MaterialUIModal style={styles.rootContainer} {...this.props}>
        {this.props.children}
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
