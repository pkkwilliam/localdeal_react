import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Link from "@material-ui/core/Link";
import { OAuthProvider, OAuthDetail } from "../../modal/oAuthProvider";
import View from "../../common/view";
import H4 from "../../common/h4";
import Image from "../../common/image";
import TextButton from "../../common/textButton";
import { UserProfile } from "../../modal/userProfile";
import Collapse from "@material-ui/core/Collapse";
import SecondaryButton from "../../common/secondaryButton";
import OutlinedTextField from "../../common/outlinedTextField";
import Icon from "../../common/icon";

interface Props {
  nickname: string;
  oAuthDetails: OAuthDetail[];
  onChangeNickName: (nickname: string) => void;
  onClickLogout: () => void;
  onClickManageProfile: () => void;
  onCloseManageProfile: () => void;
  onClickSaveProfile: () => void;
  showManageProfile: boolean;
  userProfile: UserProfile;
}

export default class OAuthView extends ApplicationComponent<Props> {
  render() {
    return <this.Container />;
  }

  protected Container = () => {
    const userLoggedIn =
      this.props.userProfile.oAuthProvider !== OAuthProvider.NONE;
    const child = userLoggedIn ? (
      <this.UserProfileSection />
    ) : (
      <this.OAuthSelection />
    );
    return (
      <>
        <View
          boxShadow={1}
          isFlexDirectionRow
          onClick={this.props.onClickManageProfile}
          style={styles.userProfileHeaderSectionContainer}
        >
          {child}
        </View>
        <this.ManageProfile />
      </>
    );
  };

  protected LogoutButton = () => {
    return (
      <TextButton
        buttonType="secondary"
        message={this.labels.oAuth.logout}
        onClick={this.props.onClickLogout}
      />
    );
  };

  protected ManageProfile = () => {
    const labels = this.labels.oAuth.userProfile;
    return (
      <Collapse in={this.props.showManageProfile} style={{ width: "inherit" }}>
        <View style={{ alignItems: "center", width: "inherit" }}>
          <OutlinedTextField
            label={labels.name}
            onChange={this.props.onChangeNickName}
            value={this.props.nickname}
          />
          <View isFlexDirectionRow>
            <SecondaryButton
              buttonType="secondary"
              onClick={this.props.onCloseManageProfile}
            >
              {labels.cancel}
            </SecondaryButton>
            <SecondaryButton
              buttonType="primary"
              onClick={this.props.onClickSaveProfile}
            >
              {labels.save}
            </SecondaryButton>
          </View>
          <this.LogoutButton />
        </View>
      </Collapse>
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
    const labels = this.labels.oAuth;
    if (userProfile.oAuthProvider !== OAuthProvider.NONE) {
      return (
        <>
          <Image size="miniCircularImage" src={userProfile.imageUrl} />
          <H4 color="black">{userProfile.name}</H4>
          <Icon
            type="post"
            toolTipsMessage={`${labels.postCreated}${userProfile.dealCreated.length}`}
          >
            {userProfile.dealCreated.length}
          </Icon>
          <Icon
            type="favroite"
            toolTipsMessage={`${labels.likedReceived}${userProfile.likedSum}`}
          >
            {userProfile.likedSum}
          </Icon>
        </>
      );
    }
    return null;
  };

  protected generateOAuthSelection() {
    return this.props.oAuthDetails.map((oAuthDetail) => {
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
  logoutButton: {
    alignSelf: "flexEnd",
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
