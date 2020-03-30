import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { LOGOUT_OAUTH } from "../../common/middleware/service";

export default class OAuth extends ApplicationComponent<{}> {
  render() {
    return (
      <OAuthView
        onClickLogout={this.onClickLogout}
        userProfile={this.appState.user.userProfile}
      />
    );
  }

  protected onClickLogout = () => {
    console.log("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.appState.user.removeUserProfile();
    });
  };
}
