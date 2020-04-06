import { Component } from "react";
import AppContext from "./appContext";
import { OAuthProvider } from "./feature/oAuthProvider";
import ImageProcessor from "./imageProcessor";
import AppState from "../common/context/appState";
import AppStateInterface from "./context/appStateInterface";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  static contextType = AppState;
  private readonly _appContext: AppContext = new AppContext();
  private readonly _imageProcessor: ImageProcessor = new ImageProcessor();

  get appContext(): AppContext {
    return this._appContext;
  }

  get appState(): AppStateInterface {
    return this.context;
  }

  get imageProcessor(): ImageProcessor {
    return this._imageProcessor;
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
      oAuthProvider,
    };
  }

  public onOAuthLoginComplete() {
    window.history.pushState(null, document.title, "/");
  }
}
