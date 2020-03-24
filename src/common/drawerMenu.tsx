import React, { Component, ReactNode } from "react";
import { Drawer, DrawerProps } from "@material-ui/core";
import { View } from ".";
import { styleSchema } from "./stylesheet";

export default class DrawerMenu extends Component<DrawerProps> {
  render() {
    return (
      <Drawer {...this.props}>
        <View style={styles.rootContainer}>{this.props.children}</View>
      </Drawer>
    );
  }
}

const styles = {
  rootContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "inherit",
    paddingLeft: 15,
    paddingRight: 15,
    width: styleSchema.dimension.FILL_ALL_WIDTH
  }
};