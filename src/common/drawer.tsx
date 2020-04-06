import React, { Component } from "react";
import { default as MuiDrawer, DrawerProps } from "@material-ui/core/Drawer";
import { View } from ".";
import { styleSchema } from "./stylesheet";

export default class Draewer extends Component<DrawerProps> {
  render() {
    return (
      <MuiDrawer {...this.props}>
        <View style={styles.rootContainer}>{this.props.children}</View>
      </MuiDrawer>
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
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
};
