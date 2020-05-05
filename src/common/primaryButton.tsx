import React, { Component } from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";
import { styleSchema } from "./stylesheet";

export default class PrimaryButton<
  ChildProps extends ButtonProps
> extends Component<ChildProps> {
  render() {
    const color: any = {
      backgroundColor: this.props.disabled
        ? styleSchema.color.greyDark
        : styleSchema.color.primaryColor,
    };
    return (
      <Button
        style={{
          ...color,
          ...styles.buttonDefaultStyle,
          ...this.getButtonStyle(),
        }}
        {...this.props}
      >
        <p style={{ ...styles.text, ...this.getTextStyle() }}>
          {this.props.children}
        </p>
      </Button>
    );
  }

  public getButtonStyle() {
    return { width: "inherit" };
  }

  public getTextStyle() {
    return {};
  }
}

const styles = {
  buttonDefaultStyle: {
    borderRadius: 25,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: styleSchema.color.white,
    fontSize: 15,
    fontWeight: 600,
    margin: 0,
  },
};
