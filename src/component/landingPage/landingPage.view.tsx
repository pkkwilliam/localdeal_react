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
  isCreateDealDrawerOpen: boolean;
  onBlurTextField: () => void;
  onClickCard: () => void;
  onClickCreateDeal: () => void;
  onCloseCreateDeal: () => void;
  onClickDealSection: () => void;
  onClickLocationButton: () => void;
  onClickSearch: () => void;
  onChangeSearchTextField: (text: string) => void;
  onFocusTextField: () => void;
  selectedAddress: Address;
  showSearchButton: boolean;
  textFieldValue: string;
  useAutoLocation: boolean;
}

export default class LandingPageView extends ApplicationComponent<Props> {
  render() {
    return (
      <View style={styles.rootContainer}>
        <this.TopBarSection />
        <AddressPrediction />
        <this.BodySection />
      </View>
    );
  }

  BodySection = () => {
    return (
      <>
        <this.CreateDealSection />
        <this.DealsSection />
      </>
    );
  };

  CreateDealSection = () => {
    return (
      <Drawer
        anchor={"top"}
        open={this.props.isCreateDealDrawerOpen}
        onClose={() => this.props.onCloseCreateDeal()}
      >
        <CreateDealLandingPage onClickClose={this.props.onCloseCreateDeal} />
      </Drawer>
    );
  };

  CreateNewDealButton = () => {
    return (
      <Button
        style={styles.createNewButton}
        onClick={() => this.props.onClickCreateDeal()}
        variant="outlined"
      >
        <H5>{this.appContext.labels.landingPage.createDealButton}</H5>
      </Button>
    );
  };

  DealsSection = () => {
    let dealsContent = this.props.deals ? this.props.deals : [];
    let dealsCard = dealsContent.map(deal => {
      return (
        <LocalDealCard
          contents={this.generateCardContent(deal)}
          onClick={() => this.props.onClickCard()}
          title={deal.title}
        />
      );
    });
    return (
      <Box
        onClick={() => this.props.onClickDealSection()}
        style={styles.dealSectionContainer}
      >
        {dealsCard.length ? dealsCard : <this.NoDealInArea />}
      </Box>
    );
  };

  LocationButton = () => {
    const showCircularProgressor: boolean =
      this.props.selectedAddress && this.props.selectedAddress.area !== "";
    return (
      <Button
        disabled={true}
        onClick={this.props.onClickLocationButton}
        style={styles.searchMethodLabel.coordinate}
        variant="outlined"
      >
        <View isFlexDirectionRow={true} style={styles.locationButtonContainer}>
          <H5 color={styleSchema.font.white}>
            {`${this.appContext.labels.landingPage.geolocationProvider}:`}
          </H5>
          {showCircularProgressor ? (
            <H5 color={styleSchema.font.white}>
              {this.props.selectedAddress.area}
            </H5>
          ) : (
            <CircularProgress
              size={15}
              style={styles.circularProgress}
              variant={"indeterminate"}
            />
          )}
        </View>
      </Button>
    );
  };

  NoDealInArea = () => {
    return <p>{this.appContext.labels.landingPage.noDeal}</p>;
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

  TopBarSection = () => {
    return (
      <View isFlexDirectionRow={true} style={styles.topBarContainer}>
        <this.LocationButton />
        {/* Not sure if we want search for now */}
        {/* <this.TextFieldArea />
        <this.SearchButton /> */}
        <this.CreateNewDealButton />
      </View>
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
    marginTop: 20,
    width: "100%"
  },
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  rootContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
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
    paddingTop: 20,
    width: "100%"
  }
};
