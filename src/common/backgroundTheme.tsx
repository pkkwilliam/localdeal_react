import React, { Component } from "react";
import { View } from ".";
import { styleSchema } from "./stylesheet";

interface Props {
  styles?: any;
  theme?: "primary" | "secondary";
}

export default class BackgroundTheme extends Component<Props> {
  render() {
    const themeStyle =
      this.props.theme === "secondary"
        ? styles.secondaryTheme
        : styles.primaryTheme;
    return (
      <View
        style={{ ...styles.rootContainer, ...themeStyle, ...this.props.styles }}
      >
        {this.props.children}
      </View>
    );
  }
}

const styles = {
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.primaryColorTransparent,
    borderRadius: 8,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  },
  primaryTheme: {
    backgroundColor: styleSchema.color.primaryColorTransparent
  },
  secondaryTheme: {
    backgroundColor: styleSchema.color.secondaryColorTransparent
  }
};
