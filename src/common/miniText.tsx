import React, { Component } from "react";
import { styleSchema } from "./stylesheet";

interface Props {
  color: "primary" | "secondary";
}

export default class MiniText extends Component<Props> {
  additionalStyle =
    this.props.color === "primary"
      ? styles.primaryStyle
      : styles.secondaryStyle;
  render() {
    return (
      <p style={{ ...styles.default, ...this.additionalStyle }}>
        {this.props.children}
      </p>
    );
  }
}

const styles = {
  default: {
    fontSize: 9,
    margin: 0
  },
  primaryStyle: {
    color: styleSchema.color.primaryColor
  },
  secondaryStyle: {
    color: styleSchema.color.secondaryColor
  }
};
