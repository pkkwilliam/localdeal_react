import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal from "../../modal/deal";
import { LandingPageView } from ".";
import "../../App.css";

export interface State {
  deals: Deal[];
  isLoading: boolean;
}

export default class LandingPage extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      deals: [],
      isLoading: true,
    };
  }

  onSetDeals = (deals: Deal[]) => {
    this.setState({
      deals,
    });
  };

  componentDidMount() {
    this.refreshDeal();
  }

  refreshDeal = () => {
    this.setDeals(this.onSetDeals);
  };

  protected sortDeals(inputDeals: Deal[]): Deal[] {
    return inputDeals.sort((deal1, deal2) => {
      return deal2.timestamp - deal1.timestamp;
    });
  }

  render() {
    const sortedDeal: Deal[] = this.sortDeals(this.state.deals);
    return (
      <LandingPageView
        deals={sortedDeal}
        isLoadingDeals={this.state.isLoading}
        refreshDeal={this.refreshDeal}
      />
    );
  }
}
