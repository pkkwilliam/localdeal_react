import { Component } from "react";
import AppContext from "./appContext";
import { OAuthProvider } from "../modal/oAuthProvider";
import ImageProcessor from "./imageProcessor";
import AppState from "../common/context/appState";
import AppStateInterface from "./context/appStateInterface";
import LabelService from "./middleware/labelService";
import {
  LOGIN_OAUTH_GOOGLE,
  GET_CURRENT_ADDRESS,
  GET_DEALS,
  GET_SERVER_HEALTH,
  GET_USER_PROFILE,
} from "./middleware/service";
import LocalStorage from "../common/localStorage";
import { Coordinate, GetDealResponse, Address } from "../modal/deal";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  static contextType = AppState;
  private readonly _localStorage = new LocalStorage();
  private readonly _appContext: AppContext = new AppContext();
  private readonly _imageProcessor: ImageProcessor = new ImageProcessor();
  private readonly _labelService: LabelService = new LabelService(
    this._localStorage,
    this.appContext.serviceExecutor
  );

  get appContext(): AppContext {
    return this._appContext;
  }

  get appState(): AppStateInterface {
    return this.context;
  }

  get imageProcessor(): ImageProcessor {
    return this._imageProcessor;
  }

  get labels(): any {
    return this._labelService.label;
  }

  get localStorage(): LocalStorage {
    return this._localStorage;
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

  async executeInit(setDealsCallBack: (deal: any) => void) {
    let value = await Promise.all([
      this.getServerStatus().then((result) => result),
      this._labelService.checkLabelVersion(),
      this.setCurrentPosition(),
    ]);
    if (value[0]) {
      this.checkOAuthFromUrl();
      this.getUserProfile();
      await this.setCurrentAddress();
      await this.executeGetDeals(setDealsCallBack);
    }
    this.forceUpdate();
    return value[0];
  }

  protected checkOAuthFromUrl() {
    const { authorizationCode, oAuthProvider } = this.checkOAuth();
    if (oAuthProvider === OAuthProvider.GOOGLE) {
      this.appContext.serviceExecutor
        .execute(
          LOGIN_OAUTH_GOOGLE(
            authorizationCode,
            this.appContext.oAuthRedirectUrl
          )
        )
        .then(() => {
          this.onOAuthLoginComplete();
          this.getUserProfile();
        });
    }
  }

  protected async setCurrentPosition() {
    if (this.appContext.isMock) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.appContext.transformer.getCurrentLocation(
        (coordinate: Coordinate) => {
          this.appState.position.setGeolocation(coordinate);
          return resolve();
        }
      );
    });
  }

  protected async setCurrentAddress() {
    return new Promise((resolve, reject) => {
      this.appContext.serviceExecutor
        .execute(
          GET_CURRENT_ADDRESS({
            coordinate: this.appState.position.coordinate,
          })
        )
        .then((addresses: Address[]) => {
          this.appState.address.setPredicteAddresses(addresses);
          this.appState.position.setLoadingPosition(false);
          this.appState.address.setSelectedAddress(addresses[0]);
          return resolve();
        });
    });
  }

  protected executeGetDeals = (setDealsCallBack: (deals: any) => void) => {
    if (this.appState.address.selectedAddress?.area) {
      this.appContext.serviceExecutor
        .execute(GET_DEALS(this.appState.address.selectedAddress))
        .then((getDealResponse: GetDealResponse) => {
          setDealsCallBack(getDealResponse.deals);
          this.appState.deal.setDeals(getDealResponse.deals);
        });
    }
  };

  protected async getServerStatus() {
    return this.appContext.serviceExecutor
      .execute(GET_SERVER_HEALTH())
      .then((result) => {
        this.appState.service.setServiceUp(result.up);
        return Promise.resolve(result.up);
      })
      .catch((ex) => {
        this.appState.service.setServiceUp(false);
        return Promise.reject(false);
      });
  }

  protected getUserProfile() {
    this.appContext.serviceExecutor
      .execute(GET_USER_PROFILE())
      .then((result) => {
        return this.appState.user.setUserProfile(result);
      });
  }
}
