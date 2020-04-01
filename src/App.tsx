import React, { Component } from "react";
import "./App.css";
import { Header } from "./component/header";
import { LandingPage } from "./component/landingPage";
import { Init } from "./component/init";
import GlobalStateComponent from "./common/context/globalStateComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class App extends Component {
  render() {
    return (
      <GlobalStateComponent>
        <Init />
        <div className="App-header">
          <Header />
        </div>
        <div className="Content">
          <LandingPage />
        </div>
      </GlobalStateComponent>
    );
  }
}
