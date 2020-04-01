import React from "react";
import Deal, { Address } from "../../modal/deal";
import { H5, LocalDealTextField, styleSchema, View } from "../../common";
import ApplicationComponent from "../../common/applicationComponent";
import { Feature } from "../../common/feature/feature";
import { DealSectionView, DealSectionV2View } from "./dealSection";

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
  selectedAddress?: Address;
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
    const displayBody = () => {
      if (this.props.deals.length) {
        return !this.appContext.features.includes(Feature.DEAL_LEGACY) ? (
          <DealSectionV2View deals={this.props.deals} />
        ) : (
          <DealSectionView {...this.props} />
        );
      } else if (this.props.isLoadingDeals) {
        return <this.LoadingDeals />;
      } else {
        return <this.NoDealInArea />;
      }
    };
    return (
      <View
        boxShadow={this.props.deals.length ? 1 : 0}
        style={styles.dealSectionContainer}
      >
        {displayBody}
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
}

const styles = {
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

  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  noDealInAreaContainer: {},
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: styleSchema.dimension.FILL_ALL_WIDTH
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
  slideImageContainer: {
    alightItems: "center",
    backgroundColor: "blue",
    justifyContent: "center"
  },
  topBarContainer: {
    justifyContent: "space-between",
    paddingTop: 15,
    width: "100%"
  }
};
