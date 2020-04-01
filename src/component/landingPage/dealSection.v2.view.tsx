import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal from "../../modal/deal";
import { Slider } from "../../common";

interface Props {
  deals: Deal[];
  onClickCard: () => void;
}

export default class DealSectionView extends ApplicationComponent<Props> {
  render() {
    return <this.DealsSection />;
  }

  DealsSection = () => {
    const deals = this.props.deals.map((deal, index) => {
      return <Slider contentArray={deal.filesUrl ?? []} dealIndex={index} />;
    });
    return <>{deals}</>;
  };
}
