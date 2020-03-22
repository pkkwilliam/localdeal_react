import React, { Component } from "react";
import { View } from ".";
import { styleSchema } from "./stylesheet";

interface Props {
  styles?: any;
}

export default class BackgroundTheme extends Component<Props> {
  render() {
    return (
      <View style={{ ...styles.rootContainer, ...this.props.styles }}>
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
    padding: 20,
    marginTop: 20,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  }
};
