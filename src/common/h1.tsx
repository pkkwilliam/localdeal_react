import React, { Component } from "react";
import { styleSchema } from "./stylesheet";

export interface Props {
  color?: "primary" | "secondary" | "black" | "white";
  style?: any;
}

export default class H1<ChildProps extends Props = Props> extends Component<
  ChildProps
> {
  render() {
    return (
      <span
        style={{
          color: this.getColor(),
          ...this.getDefaultStyle(),
          ...this.props.style,
        }}
      >
        {this.props.children}
      </span>
    );
  }

  protected getColor(): string {
    switch (this.props.color) {
      case "primary":
        return styles.primaryColor.color;
      case "secondary":
        return styles.secondaryColor.color;
      case "black":
        return styles.black.color;
      case "white":
        return styles.white.color;
      default:
        return this.getDefaultColor();
    }
  }

  protected getDefaultColor() {
    return styles.black.color;
  }

  protected getDefaultStyle() {
    return { ...styles.defaultStyle, ...this.getStyle() };
  }

  protected getStyle(): any {
    return styles.text;
  }
}

const styles = {
  defaultStyle: {
    margin: 0,
  },
  text: {
    fontFamily: styleSchema.font.primaryFont,
    fontSize: 18,
    fontWeight: 600,
  },
  primaryColor: {
    color: styleSchema.color.primaryColor,
  },
  secondaryColor: {
    color: styleSchema.color.secondaryColor,
  },
  black: {
    color: styleSchema.color.black,
  },
  white: {
    color: styleSchema.color.white,
  },
};
