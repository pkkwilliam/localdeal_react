import React from "react";
import Deal, { Address } from "../../modal/deal";
import {
  LocalDealCard,
  H1,
  H5,
  LocalDealTextField,
  styleSchema,
  View,
  AddressDisplay,
  CardBottomVote
} from "../../common";
import ApplicationComponent from "../../common/applicationComponent";

export interface Props {
  deals: Deal[];
  executeGetDeals: () => void;
  isLoadingDeals: boolean;
  onBlurTextField: () => void;
  onClickCard: () => void;
  onClickDealSection: () => void;
  onClickSearch: () => void;
  onChangeSearchTextField: (text: string) => void;
  onFocusTextField: () => void;
  selectedAddress: Address;
  showSearchButton: boolean;
  textFieldValue: string;
}

export default class LandingPageView extends ApplicationComponent<Props> {
  render() {
    return (
      <View style={styles.rootContainer}>
        <this.BodySection />
      </View>
    );
  }

  BodySection = () => {
    return <this.DealsSection />;
  };

  DealsSection = () => {
    const dealsContent = this.props.deals ? this.props.deals : [];
    const dealsCard = dealsContent.map(deal => {
      const content: React.ReactNode = this.generateCardContent(deal);
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
    const dealSection = () => {
      if (dealsCard.length) {
        return dealsCard;
      } else if (this.props.isLoadingDeals) {
        return <this.LoadingDeals />;
      } else {
        return <this.NoDealInArea />;
      }
    };
    return (
      <View
        boxShadow={dealsCard.length ? 1 : 0}
        style={styles.dealSectionContainer}
      >
        {/* {dealsCard.length ? dealsCard : <this.NoDealInArea />} */}
        {dealSection}
      </View>
    );
  };

  LoadingDeals = () => {
    return (
      <View style={styles.noDealInAreaContainer}>
        <H5>{this.appContext.labels.landingPage.loadingDeals}</H5>
      </View>
    );
  };

  NoDealInArea = () => {
    return (
      <View style={styles.noDealInAreaContainer}>
        <H5>{this.appContext.labels.landingPage.noDeal}</H5>
      </View>
    );
  };

  TextFieldArea = () => {
    return (
      <LocalDealTextField
        defaultValue={this.props.textFieldValue}
        onBlur={() => this.props.onBlurTextField()}
        onChange={text => this.props.onChangeSearchTextField(text)}
        onFocus={() => this.props.onFocusTextField()}
        text={this.appContext.labels.landingPage.area}
      />
    );
  };

  protected generateCardContent = (deal: Deal): React.ReactNode => {
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
        <View style={styles.detailSectionContainer}>
          <AddressDisplay address={address} />
          <div
            style={{ width: "inherit" }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {/* <ReactQuill value={description} readOnly={true} /> */}
        </View>
      </>
    );
  };
}

const styles = {
  cardContainer: {
    justifyContent: "space-between"
  },
  circularProgress: {
    marginLeft: 5
  },
  createNewButton: {
    borderColor: styleSchema.color.secondaryColor,
    borderRadius: styleSchema.button.borderRadius,
    borderWidth: 3
  },
  dealSectionContainer: {
    alignItems: "center",
    width: "100%"
  },
  detailSectionContainer: {
    width: "inherit",
    textAlign: "justify"
  },
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  noDealInAreaContainer: {},
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  searchButton: {
    borderColor: styleSchema.remind.secondaryColor,
    borderRadius: styleSchema.button.borderRadius,
    backgroundColor: styleSchema.remind.secondaryColor,
    borderWidth: 3
  },
  searchMethodLabel: {
    coordinate: {
      borderColor: styleSchema.remind.primaryColor,
      borderRadius: styleSchema.button.borderRadius,
      backgroundColor: styleSchema.remind.primaryColor,
      borderWidth: 3,
      paddingBottom: 5,
      paddingTop: 5
    },
    manual: {
      borderColor: styleSchema.remind.secondaryColor,
      borderRadius: styleSchema.button.borderRadius,
      backgroundColor: styleSchema.remind.secondaryColor,
      borderWidth: 3,
      paddingBottom: 5,
      paddingTop: 5
    }
  },
  topBarContainer: {
    justifyContent: "space-between",
    paddingTop: 15,
    width: "100%"
  }
};
