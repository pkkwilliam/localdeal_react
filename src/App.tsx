import React, { Component } from "react";
import "./App.css";
import GlobalStateComponent from "./common/context/globalStateComponent";
import GooWhereLandingPage from "./component/gooWhere/gooWhereLandingPage";

export default class App extends Component {
  render() {
    return (
      <GlobalStateComponent>
        <GooWhereLandingPage />
      </GlobalStateComponent>
    );
  }
}
