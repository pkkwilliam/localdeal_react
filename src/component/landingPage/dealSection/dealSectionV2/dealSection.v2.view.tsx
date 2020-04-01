import React, { Component } from "react";
import Deal from "../../../../modal/deal";
import DealCardV2 from "./dealCardV2";

interface Props {
  deals: Deal[];
}

export default class DealSectionView extends Component<Props> {
  render() {
    const generatedDeals = this.props.deals.map((deal: Deal) => (
      <DealCardV2 deal={deal}></DealCardV2>
    ));
    return <>{generatedDeals}</>;
  }
}
