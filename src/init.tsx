import React, { Suspense } from "react";
import "./App.css";
import { LazyLoadComponent } from "./lazyLoad/lazyLoadComponent";
import { getLazyComponent } from "./lazyLoad/lazyLoad";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApplicationComponent from "./common/applicationComponent";
import Deal from "./modal/deal";

const Announcement = getLazyComponent(LazyLoadComponent.Announcement);
const Banner = getLazyComponent(LazyLoadComponent.Banner);
const Header = getLazyComponent(LazyLoadComponent.Header);
const LandingPage = getLazyComponent(LazyLoadComponent.LandingPage);
const Modal = getLazyComponent(LazyLoadComponent.Modal);

interface State {
  deals: Deal[];
}

export default class Init extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      deals: [],
    };
  }

  componentWillMount() {
    this.initServiceCall();
  }

  render() {
    return (
      <Suspense fallback={<></>}>
        <this.ServerErrorModal />
          <Header />
        {/* <Announcement /> */}
        <Banner />
          <LandingPage
            deals={this.state.deals}
            refreshDeal={this.refreshDeal}
          />
      </Suspense>
    );
  }

  // not sure if this is exactly good, still want to put it in appState
  refreshDeal = (deal: Deal) => {
    const index = this.state.deals.findIndex(
      (removeDeal) => removeDeal.id === deal.id
    );
    const arrayCopy = [...this.state.deals];
    if (index >= 0) {
      arrayCopy.splice(index, 1, deal);
    }
    this.setState({
      deals: arrayCopy,
    });
  };

  initServiceCall = () => {
    this.executeInit((deals) =>
      this.setState({
        deals,
      })
    );
  };

  ServerErrorModal = () => {
    if (!this.appState.service.serviceUp) {
      const label = this.labels.header;
      return (
        <Modal
          primaryButtonMessage={label.refresh}
          onClickPrimaryButton={this.initServiceCall}
          message={label.serverError}
          open={true}
        ></Modal>
      );
    } else {
      return null;
    }
  };
}
