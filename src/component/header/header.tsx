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
      useAutoLocation: true,
    };
  }

  componentDidMount() {
    this.executeInit();
  }

  render() {
    return (
      <HeaderView
        isCreateDealDrawerOpen={this.state.isCreateDealDrawerOpen}
        onClickCreateDeal={this.onClickCreateDeal}
        onCloseCreateDeal={this.onCloseCreateDeal}
        onClickRefresh={this.onClickRefresh}
        selectedAddress={this.appState.address.selectedAddress}
        serverUp={this.appState.service.serviceUp}
      />
    );
  }

  protected onClickCreateDeal = () => {
    console.debug("onClickCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: true,
    });
  };

  protected onCloseAnnouncement = () => {};

  protected onCloseCreateDeal = () => {
    console.debug("onCloseCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: false,
    });
  };

  protected onClickRefresh = () => {
    console.debug("onClickRefresh");
    this.executeInit();
  };
}
