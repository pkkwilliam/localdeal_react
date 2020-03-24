import { OAuthProvider } from "../../common/feature/oAuthProvider";
import { connect } from "react-redux";
import ApplicationComponent from "../../common/applicationComponent";
import { setUserProfile } from "../../common/redux/action";
import { UserProfile } from "../../modal/userProfile";
import { LOGIN_OAUTH_GOOGLE } from "../../common/middleware/service";

export default class Init {
  // public checkOAuth() {
  //   const search = window.location.search;
  //   const params = new URLSearchParams(search);
  //   const oAuthProvider = params.get("state");
  //   if (oAuthProvider === OAuthProvider.GOOGLE) {
  //     this.googleOAuthLogin(params);
  //   }
  // }
  // protected async googleOAuthLogin(params: URLSearchParams) {
  //   const authorizationCode = params.get("code");
  //   if (authorizationCode) {
  //     const userProfile: UserProfile = await this.appContext.serviceExecutor.execute(
  //       LOGIN_OAUTH_GOOGLE(authorizationCode)
  //     );
  //     setUserProfile(userProfile);
  //     console.log(userProfile.name);
  //   }
  // }
}
