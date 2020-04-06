import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { Address } from "../../modal/deal";
import { styleSchema, View } from "../../common";
import logo from "../../resouces/logo_icon_character-min.png";
import { default as AddIcon } from "@material-ui/icons/Add";
import { default as LocationIcon } from "@material-ui/icons/Room";
import ToolTips from "../../common/ToolTips";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";

export interface Props {
  isCreateDealDrawerOpen: boolean;
  onClickCreateDeal: () => void;
  onCloseCreateDeal: () => void;
  selectedAddress?: Address;
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
  createNewDealIcon: {
    color: styleSchema.color.primaryColor,
    ...styleSchema.icon,
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
};
