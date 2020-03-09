import React, { Component } from "react";
import { styleSchema, H1 } from "./";

export default class H5 extends H1 {
  render() {
    return (
      <h5
        style={{ ...this.getStyle(), ...this.getColor(), ...this.props.style }}
      >
        {this.props.children}
      </h5>
    );
  }

  protected getDefaultColor(): string {
    return styleSchema.color.greyDark;
  }
}
