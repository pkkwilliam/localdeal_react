import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { LOGOUT_OAUTH } from "../../common/middleware/service";
import resources from "../../content/resource.json";
import { OAuthDetail, OAuthProvider } from "../../modal/oAuthProvider";

interface State {
  oAuthDetails: OAuthDetail[];
}

export default class OAuth extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    const oAuthDetails: OAuthDetail[] = resources.oAuth.map((oAuth) => {
      return {
        iconUrl: oAuth.iconUrl,
        provider: this.convertProvider(oAuth.provider),
        requestUrl: oAuth.requestUrl,
        requestUrlNonProd: oAuth.requestUrlNonProd,
      };
    });
    this.state = {
      oAuthDetails,
    };
  }

  render() {
    return (
      <OAuthView
        oAuthDetails={this.state.oAuthDetails}
        onClickLogout={this.onClickLogout}
        userProfile={this.appState.user.userProfile}
      />
    );
  }

  protected onClickLogout = () => {
    console.debug("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.appState.user.removeUserProfile();
    });
  };

  protected convertProvider(provider: string): OAuthProvider {
    switch (provider) {
      case OAuthProvider.GOOGLE.toString():
        return OAuthProvider.GOOGLE;
      case OAuthProvider.WECHAT.toString():
        return OAuthProvider.WECHAT;
      default:
        return OAuthProvider.NONE;
    }
  }
}
