import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";

export default class Header extends ApplicationComponent {
  render() {
    return (
      <header className="App-header">
        <p>{this.appContext.labels.title}</p>
      </header>
    );
  }
}
