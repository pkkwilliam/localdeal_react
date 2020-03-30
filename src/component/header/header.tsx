import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";
import { HeaderView } from ".";

interface State {
  isCreateDealDrawerOpen: boolean;
  isHamburgerMenuDrawerOpen: boolean;
  useAutoLocation: boolean;
}

export default class Header extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isCreateDealDrawerOpen: false,
      isHamburgerMenuDrawerOpen: false,
      useAutoLocation: true
    };
  }

  render() {
    return (
      <HeaderView
        isCreateDealDrawerOpen={this.state.isCreateDealDrawerOpen}
        isHamburgerMenuDrawerOpen={this.state.isHamburgerMenuDrawerOpen}
        onClickCreateDeal={this.onClickCreateDeal}
        onClickHamburgerMenu={this.onClickHamburgerMenu}
        onCloseCreateDeal={this.onCloseCreateDeal}
        onCloseHamburgerMenu={this.onCloseHamburgerMenu}
        onClickLocationButton={this.onClickLocationButton}
        selectedAddress={this.appState.address.selectedAddress}
        userProfile={this.appState.user.userProfile}
      />
    );
  }

  protected onClickCreateDeal = () => {
    console.debug("onClickCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: true
    });
  };

  protected onClickHamburgerMenu = () => {
    console.debug("onClickHamburgerMenu");
    this.setState({
      isHamburgerMenuDrawerOpen: true
    });
  };

  protected onCloseCreateDeal = () => {
    console.debug("onCloseCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: false
    });
  };

  protected onCloseHamburgerMenu = () => {
    console.debug("onCloseHamburgerMenu");
    this.setState({
      isHamburgerMenuDrawerOpen: false
    });
  };

  protected onClickLocationButton = () => {
    // need to complete
    console.debug("onClickLocationButton");
    this.setState({
      useAutoLocation: true
    });
  };
}
