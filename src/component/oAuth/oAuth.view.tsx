import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import BackgroundTheme from "../../common/backgroundTheme";
import View from "../../common/view";
import H4 from "../../common/h4";
import Image from "../../common/image";
import TextButton from "../../common/textButton";
import { UserProfile } from "../../modal/userProfile";
import { Feature } from "../../common/feature/feature";

interface Props {
  onClickLogout: () => void;
  userProfile: UserProfile;
}

export default class OAuthView extends ApplicationComponent<Props> {
  render() {
    return <this.Container />;
  }

  protected getGoogleOAuthRequestURL(): string {
    const requestUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&access_type=offline&include_granted_scopes=true&response_type=code&state=GOOGLE&redirect_uri=${this.appContext.oAuthRedirectUrl}&client_id=965687889406-d0pqe0hr6i3c4uo18rr5j0spqq73phth.apps.googleusercontent.com`;
    return requestUrl;
  }

  protected Container = () => {
    const child =
      this.props.userProfile.oAuthProvider !== OAuthProvider.NONE ? (
        <this.UserProfileSection />
      ) : (
        <this.OAuthLoginOptions />
      );
    return <BackgroundTheme theme="primary">{child}</BackgroundTheme>;
  };

  protected GoogleOAuthLoginIcon = () => {
    if (this.appContext.features.includes(Feature.LOGIN_GOOGLE_OAUTH)) {
      return (
        <Button>
          <Link href={this.getGoogleOAuthRequestURL()}>Google</Link>
        </Button>
      );
    } else {
      return null;
    }
  };

  protected LogoutButton = () => {
    return (
      <TextButton onClick={this.props.onClickLogout} underline>
        {this.appContext.labels.oAuth.logout}
      </TextButton>
    );
  };

  protected OAuthLoginOptions = () => {
    return <this.GoogleOAuthLoginIcon />;
  };

  protected UserProfileSection = () => {
    if (
      this.appContext.features.includes(Feature.USER_PROFILE_IN_HEADER_MENU)
    ) {
      const userProfile: UserProfile = this.props.userProfile;
      return (
        <View isFlexDirectionRow style={styles.rootContainer}>
          <Image src={userProfile.imageUrl} />
          <View style={styles.userTextInfoContainer}>
            <H4>{this.getProviderLabel(userProfile.oAuthProvider)}</H4>
            <H4>{userProfile.name}</H4>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  protected getProviderLabel(oAuthProvider: OAuthProvider): string {
    const label = this.appContext.labels.oAuth;
    switch (oAuthProvider) {
      case OAuthProvider.GOOGLE:
        return label.google;
      case OAuthProvider.WECHAT:
        return label.weChat;
      default:
        return label.undefined;
    }
  }
}

const styles = {
  logoutButtonContainer: {
    height: "inherit",
    alignItems: "right",
    justifyContent: "right",
  },
  rootContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    width: "inherit",
  },
  userTextInfoContainer: {
    marginLeft: 15,
    width: "inherit",
  },
};
