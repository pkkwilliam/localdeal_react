import React from "react";
import Deal, { Address } from "../../modal/deal";
import CardBottomVote from "../../common/cardBottomVote";
import View from "../../common/view";
import { styleSchema } from "../../common/stylesheet";
import H1 from "../../common/h1";
import H5 from "../../common/h5";
import AddressDisplay from "../../common/addressDisplay";
import ApplicationComponent from "../../common/applicationComponent";
import { getLazyComponent } from "../../lazyLoad/lazyLoad";
import { LazyLoadComponent } from "../../lazyLoad/lazyLoadComponent";

const MAXIMUM_IMAGE_HEIGHT = 500;
const CollapseCard = getLazyComponent(LazyLoadComponent.CollapseCard);
const Slider = getLazyComponent(LazyLoadComponent.Slide);

interface Props {
  deal: Deal;
  index: number; // This need to be remove and replace with deal.id!!!
}

interface State {
  coverImageHeight: number;
  coverImageLoaded: boolean;
  expanded: boolean;
}

export default class DealCardV2 extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      coverImageHeight: 150,
      coverImageLoaded: false,
      expanded: false,
    };
  }

  render() {
    return <>{this.DealCard()}</>;
  }

  protected DealCard() {
    const deal = this.props.deal;
    const bottomToolBarContent = <CardBottomVote deal={this.props.deal} />;
    let showExpandSign: boolean =
      (deal.description !== null && deal.description !== "") ||
      deal.filesUrl.length > 1;
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
        <View style={styles.imageContainer}>
          <this.ImageSection />
        </View>
        <CollapseCard
          allowExpand={showExpandSign}
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
    title,
  }: {
    address?: Address;
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
        {address ? <AddressDisplay address={address} /> : null}
      </>
    );
  };

  protected ImageSection = () => {
    const deal = this.props.deal;
    const coverImageStyle = this.state.coverImageLoaded
      ? { height: this.state.coverImageHeight }
      : styles.empty;
    if (this.state.expanded) {
      return (
        <Slider
          dealIndex={deal.id ?? 0}
          fileUrls={deal.filesUrl ?? []}
          height={this.state.coverImageHeight}
        />
      );
    } else {
      return deal.filesUrl?.length ? (
        <img
          alt={"cover"}
          id={`deal-${this.props.index} cover-image`}
          onLoad={this.onLoadImage}
          src={deal.filesUrl[0]}
          style={coverImageStyle}
        />
      ) : null;
    }
  };

  protected onExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  protected onLoadImage = () => {
    const height = document.getElementById(
      `deal-${this.props.index} cover-image`
    )?.clientHeight;
    if (height) {
      console.debug(height);
      this.setState({
        coverImageHeight:
          height < MAXIMUM_IMAGE_HEIGHT ? height : MAXIMUM_IMAGE_HEIGHT,
        coverImageLoaded: true,
      });
    }
  };
}

const styles = {
  cardContainer: {
    justifyContent: "space-between",
    width: "inherit",
  },
  empty: {},
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    width: "inherit",
  },
  rootContainer: {
    backgroundColor: styleSchema.color.white,
    borderColor: styleSchema.color.greyTransparent,
    padding: 15,
    width: "inherit",
  },
};
