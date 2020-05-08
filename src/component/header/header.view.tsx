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

export interface Props {
  isCreateDealDrawerOpen: boolean;
  onClickCreateDeal: () => void;
  onCloseCreateDeal: () => void;
  onClickRefresh: () => void;
  selectedAddress?: Address;
  serverUp: boolean;
}

const CreateDealComponent = getLazyComponent(LazyLoadComponent.CreateDeal);
const Drawer = getLazyComponent(LazyLoadComponent.Drawer);
const Modal = getLazyComponent(LazyLoadComponent.Modal);

export default class HeaderView extends ApplicationComponent<Props> {
  render() {
    return (
      <>
        <View
          boxShadow={1}
          isFlexDirectionRow={true}
          style={styles.rootContainer}
        >
          <this.ServerErrorModal />
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
    return <Icon onClick={this.props.onClickCreateDeal} type="add" />;
  };

  ServerErrorModal = () => {
    if (!this.props.serverUp) {
      const label = this.labels.header;
      return (
        <Modal
          primaryButtonMessage={label.refresh}
          onClickPrimaryButton={this.props.onClickRefresh}
          message={label.serverError}
          open={true}
        ></Modal>
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
  rootContainer: {
    alignItems: "center",
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyDark,
    justifyContent: "space-between",
    padding: 15,
  },
};
