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
import PrimaryButton from "../../common/primaryButton";
import TextField from "../../common/textField";

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
    const onClick =
      userLoggedIn && !this.props.showManageProfile
        ? this.props.onClickManageProfile
        : this.props.onCloseManageProfile;
    return (
      <>
        <View
          boxShadow={1}
          isFlexDirectionRow
          onClick={onClick}
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
        message={this.appContext.labels.oAuth.logout}
        onClick={this.props.onClickLogout}
        style={{ alignSelf: "flexEnd" }}
        underline
      />
    );
  };

  protected ManageProfile = () => {
    return (
      <Collapse in={this.props.showManageProfile} style={{ width: "inherit" }}>
        <View style={{ width: "inherit" }}>
          <TextField
            placeholder={"Need Label - Nickname"}
            onChange={this.props.onChangeNickName}
          />
          <PrimaryButton onClick={this.props.onClickSaveProfile}>
            {"Need Label - Save"}
          </PrimaryButton>
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
    if (userProfile.oAuthProvider !== OAuthProvider.NONE) {
      return (
        <>
          <Image size="miniCircularImage" src={userProfile.imageUrl} />
          <H4 color="primary">{userProfile.name}</H4>
          <View isFlexDirectionRow></View>
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
