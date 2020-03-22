import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import { OAuthView } from ".";
import { OAuthProvider } from "../../common/feature/oAuthProvider";

interface State {
  isModalOpen: boolean;
  selectedOAuthProvider: OAuthProvider;
}

export default class OAuth extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isModalOpen: false,
      selectedOAuthProvider: OAuthProvider.WECHAT
    };
  }

  render() {
    return (
      <OAuthView
        isModalOpen={this.state.isModalOpen}
        onCloseModal={this.onCloseModal}
        onSelectedProvider={this.onSelectedProvider}
        selectedOAuthProvider={this.state.selectedOAuthProvider}
      />
    );
  }

  protected onCloseModal = () => {
    console.debug("onCloseModal");
    this.setState({
      isModalOpen: false
    });
  };

  protected onSelectedProvider = (selectedOAuthProvider: OAuthProvider) => {
    console.debug("onSelectedProvider");
    this.setState({
      isModalOpen: true,
      selectedOAuthProvider
    });
  };
}
