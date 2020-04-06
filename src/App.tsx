import React, { Component, Suspense } from "react";
import "./App.css";
import { Header } from "./component/header";
import { LandingPage } from "./component/landingPage";
import Init from "./component/init/init";
import GlobalStateComponent from "./common/context/globalStateComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadComponent } from "./lazyLoad/lazyLoadComponent";
import { getLazyComponent } from "./lazyLoad/lazyLoad";

export default class App extends Component {
  render() {
    const Banner = getLazyComponent(LazyLoadComponent.Banner);
    return (
      <GlobalStateComponent>
        <Suspense fallback={<></>}>
          <Init />
          <div className="App-header">
            <Header />
          </div>
          <Banner />
          <div className="Content">
            <LandingPage />
          </div>
        </Suspense>
      </GlobalStateComponent>
    );
  }
}
