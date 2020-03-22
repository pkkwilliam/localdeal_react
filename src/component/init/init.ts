import { OAuthProvider } from "../../common/feature/oAuthProvider";

export default class Init {
  public checkOAuth() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const oAuthProvider = params.get("state");
    if (oAuthProvider === OAuthProvider.GOOGLE) {
      this.googleOAuth(params);
    }
  }

  protected googleOAuth(params: URLSearchParams) {
    const authorizationCode = params.get("code");
    console.log("code:", authorizationCode);
  }
}
