import React, { Component } from "react";
import "./App.css";
import { store } from "./common/redux/store";
import { Provider } from "react-redux";
import { Header } from "./component/header";
import { LandingPage } from "./component/landingPage";
import { Init } from "./component/init";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Init />
        <div className="App-header">
          <Header />
        </div>
        <div className="Content">
          <LandingPage />
        </div>
      </Provider>
    );
  }
}
