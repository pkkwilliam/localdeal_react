import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal from "../../modal/deal";
import { LandingPageView } from ".";
import "../../App.css";

interface Props {
  deals: Deal[];
  refreshDeal: (deal: Deal) => void;
}

interface State {
  isLoading: boolean;
}

export default class LandingPage extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
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
    const sortedDeal: Deal[] = this.sortDeals(this.props.deals);
    return (
      <LandingPageView
        deals={sortedDeal}
        isLoadingDeals={this.state.isLoading}
        refreshDeal={this.props.refreshDeal}
      />
    );
  }
}
