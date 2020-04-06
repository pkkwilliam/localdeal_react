import React, { ReactNode, ReactElement } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";

import { Address } from "../../modal/deal";
import { styleSchema, View, DrawerMenu, Image } from "../../common";
import {
  CreateDealLandingPage,
  CreateDealLandingPageV2
} from "../createDealLandingPage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AddressPrediction } from "../addressPrediction";
import logo from "../../resouces/logo_icon_character-min.png";
import { Add as AddIcon, Room as LocationIcon } from "@material-ui/icons";
import ToolTips from "../../common/ToolTips";
import { HeaderMenu } from "../menu";
import { UserProfile } from "../../modal/userProfile";
import { OAuthProvider } from "../../common/feature/oAuthProvider";
import { Feature } from "../../common/feature/feature";
import { Avatar } from "@material-ui/core";

export interface Props {
  isCreateDealDrawerOpen: boolean;
  isHamburgerMenuDrawerOpen: boolean;
  onClickCreateDeal: () => void;
  onClickHamburgerMenu: () => void;
  onCloseCreateDeal: () => void;
  onCloseHamburgerMenu: () => void;
  onClickLocationButton: () => void;
  selectedAddress?: Address;
  userProfile: UserProfile;
}

export default class HeaderView extends ApplicationComponent<Props> {
  render() {
    return (
      <>
        <View
          boxShadow={1}
          isFlexDirectionRow={true}
          style={styles.rootContainer}
        >
          <AddressPrediction />
          <this.CreateDealDrawer />
          <this.HeaderTextAndLogo />
          <this.TopBarSection />
        </View>
      </>
    );
  }

  CreateDealDrawer = () => {
    const createDealSection = !this.appContext.features.includes(
      Feature.DEAL_LEGACY
    ) ? (
      <CreateDealLandingPageV2 onClose={this.props.onCloseCreateDeal} />
    ) : (
      <CreateDealLandingPage onClickClose={this.props.onCloseCreateDeal} />
    );

    return (
      <DrawerMenu
        anchor={"top"}
        onClose={this.props.onCloseCreateDeal}
        open={this.props.isCreateDealDrawerOpen}
      >
        {createDealSection}
      </DrawerMenu>
    );
  };

  CreateNewDealButton = () => {
    return (
      <AddIcon
        onClick={this.props.onClickCreateDeal}
        style={styles.createNewDealIcon}
      />
    );
    // return (
    //   <Button
    //     style={styles.createNewButton}
    //     onClick={this.props.onClickCreateDeal}
    //     variant="text"
    //   >
    //     <H4>{this.appContext.labels.landingPage.createDealButton}</H4>
    //   </Button>
    // );
  };

  // HamburgerMenu = () => {
  //   if (this.appContext.showHamburgerMenu) {
  //     return (
  //       <View borderLeft={1} style={styles.hamburgerMenuIconContainer}>
  //         <HamburgerMenuIcon
  //           style={styles.hamburgerMenuIcon}
  //           onClick={this.props.onClickHamburgerMenu}
  //         />
  //       </View>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  // HamburgerMenuDrawer = () => {
  //   return (
  //     <Drawer
  //       anchor={"right"}
  //       onClose={this.props.onCloseHamburgerMenu}
  //       open={this.props.isHamburgerMenuDrawerOpen}
  //     >
  //       <View></View>
  //     </Drawer>
  //   );
  // };

  HeaderTextAndLogo = () => {
    return (
      <View>
        <img alt={"app-logo"} src={logo} style={{ width: 100 }} />
      </View>
    );
  };

  LocationButton = () => {
    const label = this.appContext.labels.header;
    let areaLabel;
    if (this.props.selectedAddress && this.props.selectedAddress.area) {
      areaLabel = this.props.selectedAddress.area;
    } else {
      areaLabel = label.loading;
    }
    return (
      <ToolTips title={`${label.currentLocation} ${areaLabel}`}>
        <LocationIcon style={styles.locationIcon} />
      </ToolTips>
    );
  };

  TopBarSection = () => {
    return (
      <View isFlexDirectionRow={true} style={styles.buttonContainer}>
        <this.CreateNewDealButton />
        <this.LocationButton />
        <HeaderMenu />
        <this.UserProfileImage />
      </View>
    );
  };

  UserProfileImage = () => {
    if (
      this.appContext.features.includes(Feature.USER_PROFILE_IN_HEADER) &&
      this.props.userProfile.oAuthProvider !== OAuthProvider.NONE
    ) {
      return (
        <View style={styles.userProfileImageContainer}>
          {/* <Image
            size="miniCircularImage"
            src={this.props.userProfile.imageUrl}
          /> */}
          <Avatar src={this.props.userProfile.imageUrl} />
        </View>
      );
    }
    return null;
  };
}

const styles = {
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  circularProgress: {
    marginLeft: 5
  },
  createNewDealIcon: {
    color: styleSchema.color.primaryColor,
    ...styleSchema.icon
  },
  createNewButton: {
    borderColor: styleSchema.color.secondaryColor,
    borderRadius: styleSchema.button.borderRadius,
    borderWidth: 3
  },
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  locationIcon: {
    color: styleSchema.color.greenMedium,
    ...styleSchema.icon
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyDark,
    justifyContent: "space-between",
    padding: 15
  },
  searchMethodLabel: {
    backgroundColor: styleSchema.remind.primaryColor,
    borderColor: styleSchema.remind.primaryColor,
    borderRadius: styleSchema.button.borderRadius,
    marginRight: 10,
    borderWidth: 3,
    paddingBottom: 5,
    paddingTop: 5
  },
  userProfileImageContainer: {
    marginLeft: 15
  }
};
