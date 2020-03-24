import { Component } from "react";
import AppContext from "./appContext";
import Init from "../component/init/init";
import { OAuthProvider } from "./feature/oAuthProvider";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  private readonly _appContext: AppContext = new AppContext();
  private readonly _init: Init = new Init();

  get appContext(): AppContext {
    return this._appContext;
  }

  get init(): Init {
    return this._init;
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
}
