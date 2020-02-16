import React, { Component } from "react";
import { styleSchema } from "./";
import color from "@material-ui/core/colors/amber";

interface Props {
  color?: string;
  style?: any;
}

export default class H5 extends Component<Props> {
  render() {
    let color = {
      color: this.props.color
        ? this.props.color
        : styleSchema.color.secondaryColor
    };
    return (
      <h5 style={{ ...styles.text, ...color, ...this.props.style }}>
        {this.props.children}
      </h5>
    );
  }
}

const styles = {
  text: {
    margin: 0
  }
};
