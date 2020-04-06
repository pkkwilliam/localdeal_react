import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { HeaderMenuView } from ".";
import { LOGOUT_OAUTH } from "../../common/middleware/service";

interface State {
  isMenuOpen: boolean;
  isToastMessageOpen: boolean;
}

export default class HeaderMenu extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isToastMessageOpen: false
    };
  }

  render() {
    return (
      <HeaderMenuView
        isMenuOpen={this.state.isMenuOpen}
        onClickMenu={this.onClickMenu}
        onClickLogout={this.onClickLogout}
        onCloseMenu={this.onCloseMenu}
        userProfile={this.appState.user.userProfile}
      />
    );
  }

  onClickMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  onClickLogout = () => {
    console.debug("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.appState.user.removeUserProfile();
    });
  };

  onCloseMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };
}
