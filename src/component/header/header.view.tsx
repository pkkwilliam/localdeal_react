import React, { ReactNode, ReactElement } from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";

import { Address } from "../../modal/deal";
import { styleSchema, View, DrawerMenu } from "../../common";
import { CreateDealLandingPage } from "../createDealLandingPage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AddressPrediction } from "../addressPrediction";
import logo from "../../resouces/logo_icon_character-min.png";
import {
  Add as AddIcon,
  Menu as HamburgerMenuIcon,
  Room as LocationIcon
} from "@material-ui/icons";
import ToolTips from "../../common/ToolTips";
import { HeaderMenu } from "../menu";

export interface Props {
  isCreateDealDrawerOpen: boolean;
  isHamburgerMenuDrawerOpen: boolean;
  onClickCreateDeal: () => void;
  onClickHamburgerMenu: () => void;
  onCloseCreateDeal: () => void;
  onCloseHamburgerMenu: () => void;
  onClickLocationButton: () => void;
  selectedAddress: Address;
}

export default class HeaderView extends ApplicationComponent<Props> {
  render() {
    return (
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
      // <div className="App-header">
      // </div>
    );
  }

  CreateDealDrawer = () => {
    return (
      <DrawerMenu
        anchor={"top"}
        onClose={this.props.onCloseCreateDeal}
        open={this.props.isCreateDealDrawerOpen}
      >
        <CreateDealLandingPage onClickClose={this.props.onCloseCreateDeal} />
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
    const showCircularProgressor: boolean =
      this.props.selectedAddress && this.props.selectedAddress.area !== "";
    return (
      <LocationIcon style={styles.locationIcon} />
      // <Button
      //   disabled={true}
      //   onClick={this.props.onClickLocationButton}
      //   style={styles.searchMethodLabel}
      //   variant="outlined"
      // >
      //   <View isFlexDirectionRow={true} style={styles.locationButtonContainer}>
      //     <H5 color={styleSchema.font.white}>
      //       {`${this.appContext.labels.landingPage.geolocationProvider}:`}
      //     </H5>
      //     {showCircularProgressor ? (
      //       <H5 color={styleSchema.font.white}>
      //         {this.props.selectedAddress.area}
      //       </H5>
      //     ) : (
      //       <CircularProgress
      //         size={15}
      //         style={styles.circularProgress}
      //         variant={"indeterminate"}
      //       />
      //     )}
      //   </View>
      // </Button>
    );
  };

  TopBarSection = () => {
    const label = this.appContext.labels.header;
    return (
      <View isFlexDirectionRow={true} style={styles.buttonContainer}>
        <this.CreateNewDealButton />
        <ToolTips
          title={`${label.currentLocation} ${
            this.props.selectedAddress.area
              ? this.props.selectedAddress.area
              : label.loading
          }`}
        >
          <this.LocationButton />
        </ToolTips>
        <HeaderMenu />
      </View>
    );
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
  }
};
