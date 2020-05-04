import React, { Component } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { styleSchema } from "./stylesheet";

export default class PrimaryButton extends Component<ButtonProps> {
  render() {
    const color: any = {
      backgroundColor: this.props.disabled
        ? styleSchema.color.greyDark
        : styleSchema.color.primaryColor,
    };
    return (
      <Button style={{ ...color, ...styles.buttonStyle }} {...this.props}>
        <p style={styles.text}>{this.props.children}</p>
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    width: "inherit",
  },
  text: {
    color: styleSchema.color.white,
    fontSize: 15,
    fontWeight: 600,
    margin: 0,
  },
};
