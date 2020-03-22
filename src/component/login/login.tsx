import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { LoginView } from ".";

interface State {
  password: string;
  username: string;
}

export default class Login extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      password: "",
      username: ""
    };
  }

  render() {
    return (
      <LoginView
        onChangePassword={this.onChangePassword}
        onChangeUsername={this.onChangeUsername}
        onClickSubmit={this.onClickSubmit}
        password={this.state.password}
        username={this.state.username}
      />
    );
  }

  protected onChangePassword = (password: string) => {
    console.debug("onChangePassword");
  };

  protected onChangeUsername = (username: string) => {
    console.debug("onChangeUsername");
  };

  protected onClickSubmit = () => {
    console.debug("onClickSubmit");
  };
}
