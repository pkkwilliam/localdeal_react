import React, { ReactElement } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { Button, Link } from "@material-ui/core";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import { BackgroundTheme, View, H4, Image, P } from "../../common";
import { UserProfile } from "../../modal/userProfile";
import { request } from "http";

interface Props {
  userProfile: UserProfile;
}

export default class OAuthView extends ApplicationComponent<Props> {
  render() {
    return <this.Container />;
  }

  protected getGoogleOAuthRequestURL(): string {
    const requestUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile&access_type=offline&include_granted_scopes=true&response_type=code&state=GOOGLE&redirect_uri=${this.appContext.oAuthRedirectUrl}&client_id=965687889406-d0pqe0hr6i3c4uo18rr5j0spqq73phth.apps.googleusercontent.com`;
    console.log(requestUrl);
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
    return (
      <Button>
        <Link href={this.getGoogleOAuthRequestURL()}>Google</Link>
      </Button>
    );
  };

  protected OAuthLoginOptions = () => {
    return <this.GoogleOAuthLoginIcon />;
  };

  protected UserProfileSection = () => {
    const userProfile: UserProfile = this.props.userProfile;
    return (
      <View isFlexDirectionRow style={styles.rootContainer}>
        <Image src={userProfile.imageUrl} />
        <View>
          <H4>{this.getProviderLabel(userProfile.oAuthProvider)}</H4>
          <H4>{userProfile.name}</H4>
        </View>
      </View>
    );
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
  rootContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
    width: "inherit"
  }
};
