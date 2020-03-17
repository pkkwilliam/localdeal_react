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

export interface Props {
  isMenuOpen: boolean;
  onClickMenu: () => void;
  onCloseMenu: () => void;
}

export default class HeaderMenuView extends ApplicationComponent<Props> {
  render() {
    return (
      <View borderLeft={1} style={styles.menuIconContainer}>
        <MenuIcon style={styles.menuIcon} onClick={this.props.onClickMenu} />
        <DrawerMenu
          anchor={"right"}
          onClose={this.props.onCloseMenu}
          open={this.props.isMenuOpen}
        >
          <this.UpperPortion />
          <this.LowerPortion />
        </DrawerMenu>
      </View>
    );
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
    return (
      <Link href={`mailto:${emailAddress}`} underline={"none"}>
        <H4>{emailAddress}</H4>
      </Link>
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

  UpperPortion = () => {
    const label = this.appContext.labels.headerMenu;
    return (
      <View style={styles.upperPortionContainer}>
        <H5>{label.moreFeatureIsComingDescription}</H5>
        <H5>{label.bugReportDescription}</H5>
      </View>
    );
  };
}

const styles = {
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
  upperPortionContainer: {
    alignItems: "center",
    paddingTop: 20
  }
};
