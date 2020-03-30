import React, { Component } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { styleSchema } from "./stylesheet";

interface Props extends ButtonProps {
  onClick: () => void;
  underline?: boolean;
}

export default class TextButton extends Component<Props> {
  render() {
    const additionalStyle = this.props.underline ? styles.underline : "";
    return (
      <Button
        onClick={this.props.onClick}
        style={{ ...styles.buttonStyle, ...additionalStyle }}
        variant="text"
        {...this.props}
      >
        {this.props.children}
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    color: styleSchema.color.primaryColor,
    paddingBottom: 2,
    paddingTop: 2
  },
  underline: {
    textDecoration: "underline"
  }
};
