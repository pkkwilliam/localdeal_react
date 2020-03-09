import ApplicationComponent from "./applicationComponent";
import { Drawer } from "@material-ui/core";
import React from "react";
import { View } from ".";

interface Props {
  isMenuOpen: boolean;
  onClickMenu: () => void;
  onCloseMenu: () => void;
}

export default class DrawerRight extends ApplicationComponent<Props> {
  render() {
    return (
      <Drawer
        anchor="right"
        open={this.props.isMenuOpen}
        onClose={this.props.onCloseMenu}
        style={{ margin: 15 }}
      >
        <View style={styles.childComponentContainer}>
          {this.props.children}
        </View>
      </Drawer>
    );
  }
}

const styles = {
  childComponentContainer: {
    margin: 15
  }
};
