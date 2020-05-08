import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { styleSchema } from "../../common/stylesheet";
import View from "../../common/view";
import TextButton from "../../common/textButton";
import H5 from "../../common/h5";
import P from "../../common/paragraph";
import Link from "@material-ui/core/Link";
import { Feature } from "../../common/feature/feature";
import { OAuth } from "../oAuth";
import { UserProfile } from "../../modal/userProfile";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";
import Icon from "../../common/icon";

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
          <Icon
            onClick={this.props.onClickMenu}
            style={styles.menuIcon}
            type="menu"
          />
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
      <TextButton
        buttonType="primary"
        message={this.labels.headerMenu.closeButton}
        onClick={this.props.onCloseMenu}
      />
    );
  };

  ContactInfomation = () => {
    const label = this.labels.headerMenu;
    if (this.appContext.features.includes(Feature.CONTACT_SHOW_EMAIL)) {
      return (
        <Link href={`mailto:${label.emailAddress}`} underline={"none"}>
          <P color="primary">{label.contactUs}</P>
        </Link>
      );
    } else {
      return null;
    }
  };

  DevelopingFeatures = () => {
    const featues: any = this.labels.headerMenu.currentDevelopingFeatuers.map(
      (feature: string, index: number) => {
        return <H5>{`${index + 1}) ${feature}`}</H5>;
      }
    );
    const label = this.labels.headerMenu;
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
    const label = this.labels.headerMenu;
    return (
      <View style={styles.upperPortionContainer}>
        <OAuth />
        <this.DevelopingFeatures />
        <H5>{label.bugReportDescription}</H5>
        <View style={styles.oAuthContainer}></View>
      </View>
    );
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
  menuIcon: {
    marginLeft: 18,
  },
  menuIconContainer: {
    borderColor: styleSchema.color.greyTransparent,
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
};
