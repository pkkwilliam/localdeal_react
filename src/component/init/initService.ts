import ApplicationComponent from "../../common/applicationComponent";
import { OAuthProvider } from "../../modal/oAuthProvider";
import {
  LOGIN_OAUTH_GOOGLE,
  GET_USER_PROFILE,
  GET_CURRENT_ADDRESS,
  GET_DEALS,
  GET_SERVER_HEALTH,
} from "../../common/middleware/service";
import { Coordinate, GetDealResponse, Address } from "../../modal/deal";

export default class Init extends ApplicationComponent {
  async executeInit() {
    let value = await Promise.all([
      this.getServerStatus().then((result) => result),
      this.setCurrentPosition(),
    ]);
    if (value[0]) {
      this.checkOAuthFromUrl();
      this.getUserProfile();
      await this.setCurrentAddress();
      await this.executeGetDeals();
    }
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

  protected executeGetDeals = () => {
    if (this.appState.address.selectedAddress?.area) {
      this.appContext.serviceExecutor
        .execute(GET_DEALS(this.appState.address.selectedAddress))
        .then((getDealResponse: GetDealResponse) => {
          this.appState.deal.setDeals(getDealResponse.deals);
        });
    }
  };

  protected async getServerStatus() {
    return this.appContext.serviceExecutor
      .execute(GET_SERVER_HEALTH())
      .then((result) => {
        return Promise.resolve(result.up);
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
