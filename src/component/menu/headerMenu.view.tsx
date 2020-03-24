import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import {
  View,
  styleSchema,
  TextButton,
  H4,
  H5,
  DrawerMenu
} from "../../common";
import { Menu as MenuIcon } from "@material-ui/icons";
import Link from "@material-ui/core/Link";
import { Login } from "../login";
import { Feature } from "../../common/feature/feature";
import { OAuth } from "../oAuth";

export interface Props {
  isMenuOpen: boolean;
  onClickMenu: () => void;
  onCloseMenu: () => void;
}

export default class HeaderMenuView extends ApplicationComponent<Props> {
  render() {
    if (this.appContext.features.includes(Feature.HEADER_MENU)) {
      return (
        <View borderLeft={1} style={styles.menuIconContainer}>
          <MenuIcon style={styles.menuIcon} onClick={this.props.onClickMenu} />
          <DrawerMenu
            anchor={"right"}
            onClose={this.props.onCloseMenu}
            open={this.props.isMenuOpen}
          >
            <this.MenuContainer />
          </DrawerMenu>
        </View>
      );
    } else {
      return null;
    }
  }

  CloseButton = () => {
    return (
      <TextButton
        onClick={this.props.onCloseMenu}
        text={this.appContext.labels.headerMenu.closeButton}
      />
    );
  };

  ContactInfomation = () => {
    const emailAddress = this.appContext.labels.headerMenu.emailAddress;
    if (this.appContext.features.includes(Feature.CONTACT_SHOW_EMAIL)) {
      return (
        <Link href={`mailto:${emailAddress}`} underline={"none"}>
          <H4>{emailAddress}</H4>
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
    return (
      <View style={styles.developingFeatureContainer}>
        <H5>{this.appContext.labels.headerMenu.developingFeature}</H5>
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
        <H5>{label.moreFeatureIsComingDescription}</H5>

        <this.DevelopingFeatures />
        <H5>{label.bugReportDescription}</H5>
        <Login />
        <View style={styles.oAuthContainer}>
          <OAuth />
        </View>
      </View>
    );
  };
}

const styles = {
  developingFeatureContainer: {
    padding: 15
  },
  lowerPortionContainer: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  menuIconContainer: {
    borderColor: styleSchema.color.greyTransparent,
    marginLeft: 18
  },
  menuIcon: {
    color: styleSchema.color.greyDark,
    ...styleSchema.icon
  },
  menuContainer: {
    alignItems: "center",
    height: "inherit",
    justifyContent: "space-between"
  },
  oAuthContainer: {
    marginTop: 20
  },
  upperPortionContainer: {
    alignItems: "center",
    paddingTop: 20
  }
};
