import React from "react";
import Deal from "../../modal/deal";
import { H5, styleSchema, View } from "../../common";
import ApplicationComponent from "../../common/applicationComponent";
import DealSectionV2View from "./dealSection.v2.view";

export interface Props {
  deals: Deal[];
  isLoadingDeals: boolean;
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
        return <DealSectionV2View deals={this.props.deals} />;
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
}

const styles = {
  dealSectionContainer: {
    alignItems: "center",
    width: "100%",
  },
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  noDealInAreaContainer: {},
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    width: styleSchema.dimension.FILL_ALL_WIDTH,
  },
  searchButton: {
    borderColor: styleSchema.remind.secondaryColor,
    borderRadius: styleSchema.button.borderRadius,
    backgroundColor: styleSchema.remind.secondaryColor,
    borderWidth: 3,
  },
};
