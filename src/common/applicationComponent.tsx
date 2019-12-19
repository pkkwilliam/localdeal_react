import React, { Component } from "react";
import AppContext from "./appContext";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  private readonly _appContext: AppContext = new AppContext();

  get appContext(): AppContext {
    return this._appContext;
  }
}
