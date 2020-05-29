import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { Address } from "../../modal/deal";
import View from "../../common/view";
import { styleSchema } from "../../common/stylesheet";
import logo from "../../resouces/logo_icon_character-min.png";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";
import Icon from "../../common/icon";
import { Feature } from "../../common/feature/feature";

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
    if (this.appContext.features.includes(Feature.CREATE_DEAL)) {
      return (
        <Icon
          onClick={this.props.onClickCreateDeal}
          type="add"
          style={styles.headerIcon}
        />
      );
    } else {
      return null;
    }
  };

  HeaderTextAndLogo = () => {
    return (
      <View>
        <img alt={"app-logo"} src={logo} style={{ width: 100 }} />
      </View>
    );
  };

  LocationButton = () => {
    const label = this.labels.header;
    let areaLabel;
    if (this.props.selectedAddress && this.props.selectedAddress.area) {
      areaLabel = this.props.selectedAddress.area;
    } else {
      areaLabel = label.loading;
    }
    return (
      <Icon
        toolTipsMessage={`${label.currentLocation} ${areaLabel}`}
        type="location"
        style={styles.headerIcon}
      />
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
  headerIcon: {
    marginRight: 15,
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyDark,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "space-between",
    padding: 15,
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
};
