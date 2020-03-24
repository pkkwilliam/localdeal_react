import { Component } from "react";
import AppContext from "./appContext";
import { OAuthProvider } from "./feature/oAuthProvider";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  private readonly _appContext: AppContext = new AppContext();

  get appContext(): AppContext {
    return this._appContext;
  }

  public checkOAuth(): {
    authorizationCode: string;
    oAuthProvider: OAuthProvider;
  } {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const state = params.get("state");
    const code = params.get("code");
    let oAuthProvider: OAuthProvider = OAuthProvider.NONE;
    let authorizationCode: string = "";
    if (state === OAuthProvider.GOOGLE) {
      oAuthProvider = OAuthProvider.GOOGLE;
      authorizationCode = code ?? "";
    }
    return {
      authorizationCode,
      oAuthProvider
    };
  }

  public onOAuthLoginComplete() {
    window.history.pushState(null, document.title, "/");
  }
}
