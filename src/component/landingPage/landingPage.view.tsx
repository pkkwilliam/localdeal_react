import React from "react";
import Deal, { Address } from "../../modal/deal";
import {
  LocalDealCard,
  H4,
  H5,
  LocalDealTextField,
  styleSchema,
  View,
  AddressDisplay
} from "../../common";
import ApplicationComponent from "../../common/applicationComponent";
import { Button, Box, Drawer } from "@material-ui/core";
import { CreateDealLandingPage } from "../createDealLandingPage";
import { AddressPrediction } from "../addressPrediction";
import CircularProgress from "@material-ui/core/CircularProgress";

export interface Props {
  deals: Deal[];
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
        />
      );
    });
    return (
      <View
        boxShadow={dealsCard.length ? 1 : 0}
        onClick={this.props.onClickDealSection}
        style={styles.dealSectionContainer}
      >
        {dealsCard.length ? dealsCard : <this.NoDealInArea />}
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

  SearchButton = () => {
    return this.props.showSearchButton ? (
      <Button
        onClick={() => this.props.onClickSearch()}
        style={styles.searchButton}
        variant="outlined"
      >
        <H5 color={styleSchema.font.white}>{"Need Label - 搜尋"}</H5>
      </Button>
    ) : null;
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
    let {
      address,
      category,
      discussions,
      description,
      title,
      timeAvailable,
      timestamp,
      vote
    } = deal;
    return (
      <>
        <View isFlexDirectionRow={true} style={styles.cardContainer}>
          <H4>{title}</H4>
          <H5>
            {timestamp
              ? this.appContext.transformer.timeDifferentCalcualtor(timestamp)
              : "Need Label - 不明"}
          </H5>
        </View>
        <View>
          <AddressDisplay address={address} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
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
