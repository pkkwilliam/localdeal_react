import React, { Component } from "react";
import "./App.css";
import GlobalStateComponent from "./common/context/globalStateComponent";
import Init from "./init";
import GooWhereLandingPage from "./component/gooWhere/gooWhereLandingPage";
import View from './common/view';

export default class App extends Component {
  render() {
    return (
      <GlobalStateComponent>
        <View style={{display: 'flex', flexDirection: 'row'}}>        <GooWhereLandingPage />
          <View>
            <Init />
          </View>
        </View>
      </GlobalStateComponent>
    );
  }
}

const styles = {
  rootContainer: {
    
  }
}