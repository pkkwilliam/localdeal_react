import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal from "../../modal/deal";
import { LandingPageView } from ".";
import {} from "../../common/middleware/service";
import "../../App.css";

export interface State {
  isLoading: boolean;
}

export default class LandingPage extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  protected sortDeals(inputDeals: Deal[]): Deal[] {
    return inputDeals.sort((deal1, deal2) => {
      return deal2.timestamp - deal1.timestamp;
    });
  }

  render() {
    const sortedDeal: Deal[] = this.sortDeals(
      this.appState.deal.deals ? this.appState.deal.deals : []
    );
    return (
      <LandingPageView
        deals={sortedDeal}
        isLoadingDeals={this.state.isLoading}
      />
    );
  }
}
