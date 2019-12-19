import React, { Component } from "react";
import Deal, { GetDealResponse } from "../modal/deal";
import { LocalDealCard } from "../common";
import { CardContent } from "@material-ui/core";

export interface Props {
  dealsResponse: GetDealResponse;
  onClickCard: () => void;
}

export default class LandingPageView extends Component<Props> {
  render() {
    return <this.DealsSection />;
  }

  generateCardContent = (deal: Deal): React.ReactNode => {
    let {
      address,
      category,
      discussions,
      description,
      title,
      timeAvailable,
      timestamp,
      vote
    } = deal;
    return (
      <div>
        {title}
        {description}
      </div>
    );
  };

  DealsSection = () => {
    let deals = this.props.dealsResponse.deals
      ? this.props.dealsResponse.deals
      : [];
    let dealsCard = deals.map(deal => {
      return (
        <LocalDealCard
          contents={this.generateCardContent(deal)}
          onClick={() => this.props.onClickCard()}
          title={deal.title}
        />
      );
    });
    return <div>{dealsCard}</div>;
  };
}
