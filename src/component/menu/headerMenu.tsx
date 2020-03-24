import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { HeaderMenuView } from ".";

interface State {
  isMenuOpen: boolean;
}

export default class HeaderMenu extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  render() {
    return (
      <HeaderMenuView
        isMenuOpen={this.state.isMenuOpen}
        onClickMenu={this.onClickMenu}
        onCloseMenu={this.onCloseMenu}
      />
    );
  }

  onClickMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  onCloseMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };
}
