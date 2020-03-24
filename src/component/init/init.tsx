import ApplicationComponent from "../../common/applicationComponent";
import { connect } from "react-redux";
import { setUserProfile } from "../../common/redux/action";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import {
  LOGIN_OAUTH_GOOGLE,
  GET_USER_PROFILE
} from "../../common/middleware/service";

interface Props {
  setUserProfile: any;
}

export class Init extends ApplicationComponent<Props> {
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
      .then(result => this.props.setUserProfile(result));
  }
}

export default connect(null, { setUserProfile })(Init);
