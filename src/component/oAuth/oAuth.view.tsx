import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Link from "@material-ui/core/Link";
import { OAuthProvider, OAuthDetail } from "../../modal/oAuthProvider";
import View from "../../common/view";
import H4 from "../../common/h4";
import Image from "../../common/image";
import TextButton from "../../common/textButton";
import { UserProfile } from "../../modal/userProfile";

interface Props {
  oAuthDetails: OAuthDetail[];
  onClickLogout: () => void;
  userProfile: UserProfile;
}

export default class OAuthView extends ApplicationComponent<Props> {
  render() {
    return <this.Container />;
  }

  protected Container = () => {
    const child =
      this.props.userProfile.oAuthProvider !== OAuthProvider.NONE ? (
        <this.UserProfileSection />
      ) : (
        <this.OAuthSelection />
      );
    return (
      <View
        boxShadow={1}
        isFlexDirectionRow
        style={styles.userProfileHeaderSectionContainer}
      >
        {child}
      </View>
    );
  };

  protected LogoutButton = () => {
    return (
      <TextButton onClick={this.props.onClickLogout} underline>
        {this.appContext.labels.oAuth.logout}
      </TextButton>
    );
  };

  protected OAuthSelection = () => {
    return (
      <View isFlexDirectionRow style={styles.oAuthSelectionContainer}>
        {this.generateOAuthSelection()}
      </View>
    );
  };

  protected UserProfileSection = () => {
    const userProfile = this.props.userProfile;
    if (userProfile.oAuthProvider !== OAuthProvider.NONE) {
      return (
        <>
          <Image size="miniCircularImage" src={userProfile.imageUrl} />
          <H4>{userProfile.name}</H4>
          <TextButton onClick={this.props.onClickLogout} underline>
            {this.appContext.labels.headerMenu.logout}
          </TextButton>
        </>
      );
    }
    return null;
  };

  protected generateOAuthSelection() {
    return this.props.oAuthDetails.map((oAuthDetail) => {
      console.log(oAuthDetail.iconUrl);
      if (oAuthDetail.provider !== OAuthProvider.NONE) {
        return (
          <Link
            href={
              this.appContext.isProd
                ? oAuthDetail.requestUrl
                : oAuthDetail.requestUrlNonProd
            }
          >
            <Image size="miniCircularImage" src={oAuthDetail.iconUrl} />
          </Link>
        );
      } else {
        return null;
      }
    });
  }
}

const styles = {
  logoutButtonContainer: {
    height: "inherit",
    alignItems: "right",
    justifyContent: "right",
  },
  oAuthSelectionContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "inherit",
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
  userProfileHeaderSectionContainer: {
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "space-between",
    padding: 5,
    width: "inherit",
  },
};
