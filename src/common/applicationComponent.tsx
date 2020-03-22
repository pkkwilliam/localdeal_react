import { Component } from "react";
import AppContext from "./appContext";
import Init from "../component/init/init";
// import { connect } from "react-redux";

export default class ApplicationComponent<
  ChildProps = {},
  ChildState = {}
> extends Component<ChildProps, ChildState> {
  private readonly _appContext: AppContext = new AppContext();
  private readonly _init: Init = new Init();

  get appContext(): AppContext {
    return this._appContext;
  }

  get init(): Init {
    return this._init;
  }
}
