import React, { Component } from "react";
import { SnackbarProps, Snackbar } from "@material-ui/core";

export default class Toast extends Component<SnackbarProps> {
  render() {
    const autoHideDuraction = this.props.autoHideDuration ? null : 6000;
    return (
      <Snackbar open={this.props.open} autoHideDuration={autoHideDuraction}>
        {this.props.children}
      </Snackbar>
    );
  }
}
