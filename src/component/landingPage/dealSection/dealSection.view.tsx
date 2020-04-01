import React from "react";
import {
  LocalDealCard,
  CardBottomVote,
  View,
  H1,
  H5,
  AddressDisplay
} from "../../../common";
import Deal, { Address } from "../../../modal/deal";
import ApplicationComponent from "../../../common/applicationComponent";

interface Props {
  deals: Deal[];
  onClickCard: () => void;
}

export default class LegacyDealSectionView<
  ChildProps extends Props
> extends ApplicationComponent<Props> {
  render() {
    return <this.LegacyDealsSection />;
  }

  LegacyDealsSection = () => {
    const dealsContent = this.props.deals ? this.props.deals : [];
    const dealsCard = dealsContent.map(deal => {
      const cardBottomVote = <CardBottomVote deal={deal} />;
      // const content: React.ReactNode = this.generateLegacyCardContent(deal);
      return (
        <LocalDealCard
          bottomToolBarContent={cardBottomVote}
          onClick={() => this.props.onClickCard()}
          title={deal.title}
        >
          <this.CardHeader
            address={deal.address}
            timestamp={deal.timestamp}
            title={deal.title}
          />
          <this.RichTextDescription description={deal.description} />
        </LocalDealCard>
      );
    });
    return <>{dealsCard}</>;
  };

  protected CardHeader = ({
    address,
    timestamp,
    title
  }: {
    address: Address;
    timestamp: number;
    title: string;
  }) => {
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

        <AddressDisplay address={address} />
      </>
    );
  };

  protected RichTextDescription = ({
    description
  }: {
    description: string;
  }) => {
    return (
      <View style={{ ...styles.detailSectionContainer, textAlign: "justify" }}>
        <div
          style={{ width: "inherit" }}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </View>
    );
  };
}

const styles = {
  cardContainer: {
    justifyContent: "space-between",
    width: "inherit"
  },
  detailSectionContainer: {
    width: "inherit"
  }
};
