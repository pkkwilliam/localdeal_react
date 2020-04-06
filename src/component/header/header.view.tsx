import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { Address } from "../../modal/deal";
import { styleSchema, View } from "../../common";
import { AddressPrediction } from "../addressPrediction";
import logo from "../../resouces/logo_icon_character-min.png";
import { Add as AddIcon, Room as LocationIcon } from "@material-ui/icons";
import ToolTips from "../../common/ToolTips";
import { UserProfile } from "../../modal/userProfile";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";

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

const CreateDealComponent = getLazyComponent(LazyLoadComponent.CreateDeal);
const Drawer = getLazyComponent(LazyLoadComponent.Drawer);

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
    return (
      <Drawer
        anchor={"top"}
        onClose={this.props.onCloseCreateDeal}
        open={this.props.isCreateDealDrawerOpen}
      >
        <CreateDealComponent onClose={this.props.onCloseCreateDeal} />
      </Drawer>
    );
  };

  CreateNewDealButton = () => {
    return (
      <AddIcon
        onClick={this.props.onClickCreateDeal}
        style={styles.createNewDealIcon}
      />
    );
  };

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
    const HeaderMenu = getLazyComponent(LazyLoadComponent.HeaderMenu);
    return (
      <View isFlexDirectionRow={true} style={styles.buttonContainer}>
        <this.CreateNewDealButton />
        <this.LocationButton />
        <HeaderMenu />
      </View>
    );
  };
}

const styles = {
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  circularProgress: {
    marginLeft: 5,
  },
  createNewDealIcon: {
    color: styleSchema.color.primaryColor,
    ...styleSchema.icon,
  },
  createNewButton: {
    borderColor: styleSchema.color.secondaryColor,
    borderRadius: styleSchema.button.borderRadius,
    borderWidth: 3,
  },
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  locationIcon: {
    color: styleSchema.color.greenMedium,
    ...styleSchema.icon,
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyDark,
    justifyContent: "space-between",
    padding: 15,
  },
  searchMethodLabel: {
    backgroundColor: styleSchema.remind.primaryColor,
    borderColor: styleSchema.remind.primaryColor,
    borderRadius: styleSchema.button.borderRadius,
    marginRight: 10,
    borderWidth: 3,
    paddingBottom: 5,
    paddingTop: 5,
  },
  userProfileImageContainer: {
    marginLeft: 15,
  },
};
