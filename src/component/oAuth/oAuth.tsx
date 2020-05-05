import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { LOGOUT_OAUTH, UPDATE_NICKNAME } from "../../common/middleware/service";
import resources from "../../content/resource.json";
import { OAuthDetail, OAuthProvider } from "../../modal/oAuthProvider";

interface State {
  nickname: string;
  oAuthDetails: OAuthDetail[];
  showManageProfile: boolean;
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
      nickname: "",
      oAuthDetails,
      showManageProfile: false,
    };
  }

  componentDidMount() {
    const nickname =
      this.appState !== undefined ? this.appState.user.userProfile.name : "";
    this.setState({
      nickname,
    });
  }

  render() {
    return (
      <OAuthView
        nickname={this.state.nickname}
        oAuthDetails={this.state.oAuthDetails}
        onChangeNickName={this.onChangeNickName}
        onCloseManageProfile={this.onCloseManageProfile}
        onClickManageProfile={this.onClickManageProfile}
        onClickLogout={this.onClickLogout}
        onClickSaveProfile={this.onClickSaveProfile}
        showManageProfile={this.state.showManageProfile}
        userProfile={this.appState.user.userProfile}
      />
    );
  }

  protected onChangeNickName = (nickname: string) => {
    this.setState({
      nickname,
    });
  };

  protected onClickLogout = () => {
    console.debug("onClickLogout");
    this.appContext.serviceExecutor.execute(LOGOUT_OAUTH()).then(() => {
      this.appState.user.removeUserProfile();
    });
  };

  protected onClickManageProfile = () => {
    console.debug("showManageProfile");
    this.setState({
      showManageProfile: true,
    });
  };

  protected onClickSaveProfile = () => {
    console.debug("onClickSaveProfile");
    this.appContext.serviceExecutor
      .execute(UPDATE_NICKNAME(this.state.nickname))
      .then(() => this.getUserProfile());
  };

  protected onCloseManageProfile = () => {
    console.log("onClickCloseManageProfile");
    this.setState({
      showManageProfile: false,
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
