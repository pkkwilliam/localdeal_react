import React from "react";
import Deal, { Address } from "../../../../modal/deal";
import {
  Slider,
  CardBottomVote,
  CollapseCard,
  View,
  styleSchema,
  H1,
  H5,
  AddressDisplay
} from "../../../../common";
import ApplicationComponent from "../../../../common/applicationComponent";

interface Props {
  deal: Deal;
}

interface State {
  coverImageHeight: number;
  expanded: boolean;
}

export default class DealCardV2 extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      expanded: false,
      coverImageHeight: 150
    };
  }

  render() {
    return <>{this.DealCard()}</>;
  }

  protected DealCard() {
    const deal = this.props.deal;
    const bottomToolBarContent = <CardBottomVote deal={this.props.deal} />;
    return (
      <View
        borderBottom={1}
        style={styles.rootContainer}
        onClick={this.onExpand}
      >
        <this.CardHeader
          address={deal.address}
          timestamp={deal.timestamp}
          title={deal.title}
        />
        <this.ImageSection />
        <CollapseCard
          bottomToolBarContent={bottomToolBarContent}
          expanded={this.state.expanded}
          onClickExpandSign={this.onExpand}
        >
          {deal.description}
        </CollapseCard>
      </View>
    );
  }

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

  protected ImageSection = () => {
    const deal = this.props.deal;
    if (this.state.expanded) {
      return (
        <View style={styles.sliderContainer}>
          <Slider
            dealIndex={deal.id ?? 0}
            fileUrls={deal.filesUrl ?? []}
            height={this.state.coverImageHeight}
          />
        </View>
      );
    } else {
      return deal.filesUrl?.length ? (
        <img
          alt={"cover"}
          id={"crazy"}
          onLoad={this.onLoadImage}
          src={deal.filesUrl[0]}
        />
      ) : null;
    }
  };

  protected onExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  protected onLoadImage = () => {
    const height = document.getElementById("crazy")?.clientHeight;
    if (height) {
      console.log(height);
      this.setState({
        coverImageHeight: height
      });
    }
  };
}

const styles = {
  cardContainer: {
    justifyContent: "space-between",
    width: "inherit"
  },
  rootContainer: {
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyTransparent,
    padding: 15,
    width: "inherit"
  },
  sliderContainer: {
    marginTop: 10,
    width: "inherit"
  }
};
