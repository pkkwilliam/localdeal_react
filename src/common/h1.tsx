import React, { Component } from "react";
import { styleSchema } from "./stylesheet";

export interface Props {
  style?: any;
}

export default class H1<ChildProps extends Props = Props> extends Component<
  ChildProps
> {
  render() {
    return (
      <p
        style={{
          ...this.getDefaultStyle(),
          ...this.getDefaultColor(),
          ...this.props.style
        }}
      >
        {this.props.children}
      </p>
    );
  }

  protected getDefaultColor(): { color: string } {
    return {
      color: this.getColor()
    };
  }

  protected getColor(): string {
    return styleSchema.color.black;
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
    margin: 0
  },
  text: {
    fontFamily: styleSchema.font.primaryFont,
    fontSize: 18,
    fontWeight: 600
  }
};
