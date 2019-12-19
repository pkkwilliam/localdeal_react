import React from "react";
import ApplicationComponent from "../common/applicationComponent";
import { GetDealResponse } from "../modal/deal";
import { LandingPageView } from ".";
import { GET_DEALS } from "../middleware/service";

export interface State {
  dealResponse: GetDealResponse;
}

export default class LandingPage extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      dealResponse: { deals: [] }
    };
  }

  componentDidMount() {
    this.getDeals().then(dealResponse =>
      this.setState({
        dealResponse
      })
    );
    setInterval(() => {
      if (this.appContext.allowDealRefresh) {
        this.getDeals();
      }
    }, this.appContext.dealRefreshTime);
  }

  async getDeals(): Promise<GetDealResponse> {
    return await this.appContext.serviceExecutor
      .execute(GET_DEALS)
      .then(dealsResponse => dealsResponse);
  }

  protected onClickedCard = () => {
    console.log("Card Clicked");
  };

  render() {
    return (
      <LandingPageView
        dealsResponse={this.state.dealResponse}
        onClickCard={this.onClickedCard}
      />
    );
  }
}
