import ApplicationComponent from "../../common/applicationComponent";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import {
  LOGIN_OAUTH_GOOGLE,
  GET_USER_PROFILE
} from "../../common/middleware/service";

export default class Init extends ApplicationComponent {
  render() {
    return null;
  }

  componentDidMount() {
    this.checkOAuthFromUrl();
    this.getUserProfile();
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

  protected getUserProfile() {
    this.appContext.serviceExecutor
      .execute(GET_USER_PROFILE())
      .then(result => this.appState.user.setUserProfile(result));
  }
}
