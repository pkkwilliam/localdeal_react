import React, { Component } from "react";
import { Button, ButtonProps } from "@material-ui/core";
import { styleSchema } from "./stylesheet";

interface Props extends ButtonProps {
  buttonType: "primary" | "secondary";
  onClick: () => void;
  message: string;
  underline?: boolean;
}

export default class TextButton extends Component<Props> {
  render() {
    const additionalStyle = this.props.underline ? styles.underline : "";
    const color = {
      color:
        this.props.buttonType === "primary"
          ? styleSchema.color.primaryColor
          : styleSchema.color.secondaryColor,
    };

    return (
      <Button
        onClick={this.props.onClick}
        style={{ ...color, ...styles.buttonStyle, ...additionalStyle }}
        variant="text"
        {...this.props}
      >
        {this.props.message}
      </Button>
    );
  }
}

const styles = {
  buttonStyle: {
    marginBottom: 5,
    marginTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
  },
  underline: {
    textDecoration: "underline",
  },
};
