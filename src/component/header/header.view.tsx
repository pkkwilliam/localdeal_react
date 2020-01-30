import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";

export default class HeaderView extends ApplicationComponent {
  render() {
    return (
      <div className="App-header">
        <p>{this.appContext.labels.title}</p>
      </div>
    );
  }
}
