import React, { Suspense, Component } from "react";
import "./App.css";
import GlobalStateComponent from "./common/context/globalStateComponent";
import { LazyLoadComponent } from "./lazyLoad/lazyLoadComponent";
import { getLazyComponent } from "./lazyLoad/lazyLoad";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Announcement = getLazyComponent(LazyLoadComponent.Announcement);
const Banner = getLazyComponent(LazyLoadComponent.Banner);
const Header = getLazyComponent(LazyLoadComponent.Header);
const LandingPage = getLazyComponent(LazyLoadComponent.LandingPage);

export default class App extends Component {
  render() {
    return (
      <GlobalStateComponent>
        <Suspense fallback={<></>}>
          <div className="App-header">
            <Header />
          </div>
          <Announcement />
          <Banner />
          <div className="Content">
            <LandingPage />
          </div>
        </Suspense>
      </GlobalStateComponent>
    );
  }
}
