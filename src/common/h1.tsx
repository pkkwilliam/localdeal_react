import React, { Component } from "react";
import { styleSchema } from "./stylesheet";

interface Props {
  color?: string;
  style?: any;
}

export default class H1 extends Component<Props> {
  render() {
    return (
      <h4
        style={{ ...this.getStyle(), ...this.getColor(), ...this.props.style }}
      >
        {this.props.children}
      </h4>
    );
  }

  protected getColor(): { color: string } {
    return {
      color: this.props.color ? this.props.color : this.getDefaultColor()
    };
  }

  protected getStyle(): any {
    return styles.text;
  }

  protected getDefaultColor(): string {
    return styleSchema.color.black;
  }
}

const styles = {
  text: {
    margin: 0
  }
};
