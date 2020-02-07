import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import "../../App.css";

import { Address } from "../../modal/deal";
import { H5, styleSchema, View, H4 } from "../../common";
import { Button, Drawer } from "@material-ui/core";
import { CreateDealLandingPage } from "../createDealLandingPage";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AddressPrediction } from "../addressPrediction";

export interface Props {
  isCreateDealDrawerOpen: boolean;
  onClickCreateDeal: () => void;
  onCloseCreateDeal: () => void;
  onClickLocationButton: () => void;
  selectedAddress: Address;
}

export default class HeaderView extends ApplicationComponent<Props> {
  render() {
    return (
      <View isFlexDirectionRow={true} style={styles.rootContainer}>
        <AddressPrediction />
        <this.CreateDealDrawer />
        <this.HeaderTextAndLogo />
        <this.TopBarSection />
      </View>
      // <div className="App-header">
      // </div>
    );
  }

  CreateDealDrawer = () => {
    return (
      <Drawer
        anchor={"top"}
        open={this.props.isCreateDealDrawerOpen}
        onClose={this.props.onCloseCreateDeal}
      >
        <CreateDealLandingPage onClickClose={this.props.onCloseCreateDeal} />
      </Drawer>
    );
  };

  CreateNewDealButton = () => {
    return (
      <Button
        style={styles.createNewButton}
        onClick={this.props.onClickCreateDeal}
        variant="outlined"
      >
        <H5>{this.appContext.labels.landingPage.createDealButton}</H5>
      </Button>
    );
  };

  HeaderTextAndLogo = () => {
    return <H4>{this.appContext.labels.title}</H4>;
  };

  LocationButton = () => {
    const showCircularProgressor: boolean =
      this.props.selectedAddress && this.props.selectedAddress.area !== "";
    return (
      <Button
        disabled={true}
        onClick={this.props.onClickLocationButton}
        style={styles.searchMethodLabel}
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

  TopBarSection = () => {
    return (
      <View isFlexDirectionRow={true} style={styles.buttonContainer}>
        <this.LocationButton />
        <this.CreateNewDealButton />
      </View>
    );
  };
}

const styles = {
  buttonContainer: {
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
  locationButtonContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  rootContainer: {
    backgroundColor: styleSchema.color.white,
    justifyContent: "space-between",
    padding: 20,
    borderColor: styleSchema.remind.primaryColor,
    borderRadius: styleSchema.button.borderRadius,
    borderWidth: 3
  },
  searchMethodLabel: {
    backgroundColor: styleSchema.remind.primaryColor,
    borderColor: styleSchema.remind.primaryColor,
    borderRadius: styleSchema.button.borderRadius,
    marginRight: 10,
    borderWidth: 3,
    paddingBottom: 5,
    paddingTop: 5
  }
};
