import React from "react";
import Deal from "../../modal/deal";
import H5 from "../../common/h5";
import View from "../../common/view";
import { styleSchema } from "../../common/stylesheet";
import ApplicationComponent from "../../common/applicationComponent";
import DealSectionV2View from "./dealSection.v2.view";

export interface Props {
  deals: Deal[];
  isLoadingDeals: boolean;
  refreshDeal: (deal: Deal) => void;
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
        return (
          <DealSectionV2View
            deals={this.props.deals}
            refreshDeal={this.props.refreshDeal}
          />
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
      <View isFlexDirectionRow style={styles.noDealInAreaContainer}>
        <H5>{this.labels.landingPage.loadingDeals}</H5>
      </View>
    );
  };

  NoDealInArea = () => {
    return (
      <View style={styles.noDealInAreaContainer}>
        <H5>{this.labels.landingPage.noDeal}</H5>
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
  noDealInAreaContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
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
