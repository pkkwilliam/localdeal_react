import React, { Component } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { styleSchema } from "./stylesheet";

interface Props extends ButtonProps {
  isDisable?: boolean;
  styles?: any;
  text?: string;
}

export default class MainButton extends Component<Props> {
  render() {
    const color: any = {
      backgroundColor: this.props.isDisable
        ? styleSchema.color.greyDark
        : styleSchema.color.primaryColor
    };
    return (
      <Button
        style={{ ...color, ...styles.buttonStyle, ...this.props.styles }}
        {...this.props}
      >
        <p style={styles.text}>{this.props.text}</p>
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
    width: "inherit"
  },
  text: {
    color: styleSchema.color.white,
    fontSize: 15,
    fontWeight: 600,
    margin: 0
  }
};
