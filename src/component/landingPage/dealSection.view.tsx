import React from "react";
import Deal from "../../modal/deal";
import {
  LocalDealCard,
  H1,
  H5,
  View,
  AddressDisplay,
  CardBottomVote
} from "../../common";
import ApplicationComponent from "../../common/applicationComponent";

export interface Props {
  deals: Deal[];
  onClickCard: () => void;
}

export default class LegacyDealSectionView extends ApplicationComponent<Props> {
  render() {
    return <this.LegacyDealsSection />;
  }

  LegacyDealsSection = () => {
    const dealsContent = this.props.deals ? this.props.deals : [];
    const dealsCard = dealsContent.map(deal => {
      const content: React.ReactNode = this.generateLegacyCardContent(deal);
      return (
        <LocalDealCard
          contents={content}
          onClick={() => this.props.onClickCard()}
          title={deal.title}
        >
          <CardBottomVote deal={deal} />
        </LocalDealCard>
      );
    });
    return <>{dealsCard}</>;
  };

  protected generateLegacyCardContent = (deal: Deal): React.ReactNode => {
    let { address, description, title, timestamp } = deal;
    return (
      <>
        <View isFlexDirectionRow={true} style={styles.cardContainer}>
          <H1>{title}</H1>
          <H5>
            {timestamp
              ? this.appContext.transformer.timeDifferentCalcualtor(timestamp)
              : this.appContext.labels.date.unknown}
          </H5>
        </View>
        <View
          style={{ ...styles.detailSectionContainer, textAlign: "justify" }}
        >
          <AddressDisplay address={address} />
          <div
            style={{ width: "inherit" }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </View>
      </>
    );
  };
}

const styles = {
  cardContainer: {
    justifyContent: "space-between"
  },

  detailSectionContainer: {
    width: "inherit"
  }
};
