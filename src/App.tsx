import React, { Component } from "react";
import "./App.css";
import GlobalStateComponent from "./common/context/globalStateComponent";
import Init from "./init";

export default class App extends Component {
  render() {
    return (
      <GlobalStateComponent>
        <Init />
      </GlobalStateComponent>
    );
  }
}
