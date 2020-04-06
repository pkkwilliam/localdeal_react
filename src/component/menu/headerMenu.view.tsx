import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { Image, View, styleSchema, TextButton, H4, H5, P } from "../../common";
import { Menu as MenuIcon } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import { Feature } from "../../common/feature/feature";
import { OAuth } from "../oAuth";
import { UserProfile } from "../../modal/userProfile";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";

export interface Props {
  isMenuOpen: boolean;
  onClickMenu: () => void;
  onClickLogout: () => void;
  onCloseMenu: () => void;
  userProfile: UserProfile;
}

const Drawer = getLazyComponent(LazyLoadComponent.Drawer);

export default class HeaderMenuView extends ApplicationComponent<Props> {
  render() {
    if (this.appContext.features.includes(Feature.HEADER_MENU)) {
      return (
        <View borderLeft={1} style={styles.menuIconContainer}>
          <MenuIcon style={styles.menuIcon} onClick={this.props.onClickMenu} />
          <Drawer
            anchor={"right"}
            onClose={this.props.onCloseMenu}
            open={this.props.isMenuOpen}
          >
            <this.MenuContainer />
          </Drawer>
        </View>
      );
    } else {
      return null;
    }
  }

  CloseButton = () => {
    return (
      <TextButton onClick={this.props.onCloseMenu}>
        {this.appContext.labels.headerMenu.closeButton}
      </TextButton>
    );
  };

  ContactInfomation = () => {
    const label = this.appContext.labels.headerMenu;
    if (this.appContext.features.includes(Feature.CONTACT_SHOW_EMAIL)) {
      return (
        <Link href={`mailto:${label.emailAddress}`} underline={"none"}>
          <P>{label.contactUs}</P>
        </Link>
      );
    } else {
      return null;
    }
  };

  DevelopingFeatures = () => {
    const featues: any = this.appContext.labels.headerMenu.currentDevelopingFeatuers.map(
      (feature: string, index: number) => {
        return <H5>{`${index + 1}) ${feature}`}</H5>;
      }
    );
    const label = this.appContext.labels.headerMenu;
    return (
      <View style={styles.developingFeatureContainer}>
        <H5>{label.moreFeatureIsComingDescription}</H5>
        <H5>{label.developingFeature}</H5>
        {featues}
      </View>
    );
  };

  LowerPortion = () => {
    return (
      <View style={styles.lowerPortionContainer}>
        <this.ContactInfomation />
        <this.CloseButton />
      </View>
    );
  };

  MenuContainer = () => {
    return (
      <View style={styles.menuContainer}>
        <this.UpperPortion />
        <this.LowerPortion />
      </View>
    );
  };

  UpperPortion = () => {
    const label = this.appContext.labels.headerMenu;
    return (
      <View style={styles.upperPortionContainer}>
        <this.UserProfileHeaderSection />
        <this.DevelopingFeatures />
        <H5>{label.bugReportDescription}</H5>
        <View style={styles.oAuthContainer}>
          <OAuth />
        </View>
      </View>
    );
  };

  UserProfileHeaderSection = () => {
    const userProfile = this.props.userProfile;
    if (userProfile.oAuthProvider !== OAuthProvider.NONE) {
      return (
        <View
          boxShadow={1}
          isFlexDirectionRow
          style={styles.userProfileHeaderSectionContainer}
        >
          <Image size="miniCircularImage" src={userProfile.imageUrl} />
          <H4>{userProfile.name}</H4>
          <TextButton onClick={this.props.onClickLogout} underline>
            {this.appContext.labels.headerMenu.logout}
          </TextButton>
        </View>
      );
    }
    return null;
  };
}
const styles = {
  developingFeatureContainer: {
    padding: 15,
  },
  lowerPortionContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  menuIconContainer: {
    borderColor: styleSchema.color.greyTransparent,
    marginLeft: 18,
  },
  menuIcon: {
    color: styleSchema.color.greyDark,
    ...styleSchema.icon,
  },
  menuContainer: {
    alignItems: "center",
    height: "inherit",
    justifyContent: "space-between",
    width: "inherit",
  },
  oAuthContainer: {
    marginTop: 20,
    width: "inherit",
  },
  upperPortionContainer: {
    alignItems: "center",
    paddingTop: 20,
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
