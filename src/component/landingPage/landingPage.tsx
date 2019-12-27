import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal, { Coordinate, Address } from "../../modal/deal";
import { LandingPageView } from ".";
import { GET_CURRENT_ADDRESS } from "../../common/middleware/service";
import CurrentArea from "../../modal/currentArea";
import { connect } from "react-redux";
import {
  setAddressPrediction,
  setDeals,
  setGeolocation,
  setLoadingPosition
} from "../../common/redux/action";
import { ReduxState } from "../../common/redux/reducers";

export interface Props {
  addressesPrediction: Address[];
  position: CurrentArea;
  deals: Deal[];
  selectedAddress: Address;
  setAddressPrediction?: any;
  setDeals?: any;
  setGeolocation?: any;
  setLoadingPosition?: any;
}

export interface State {
  isCreateDealDrawerOpen: boolean;
  showSearchButton: boolean;
  textFieldValue: string;
  useAutoLocation: boolean;
}

export class LandingPage extends ApplicationComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCreateDealDrawerOpen: false,
      showSearchButton: false,
      textFieldValue: "",
      useAutoLocation: true
    };
  }

  async componentDidMount() {
    await this.setCurrentPosition();
    await this.setCurrentAddress();
  }

  protected async setCurrentPosition() {
    if (this.appContext.isMock) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.appContext.transformer.getCurrentLocation(
        (coordinate: Coordinate) => {
          console.debug("Current Coordinate: ", coordinate);
          this.props.setGeolocation(coordinate);
          return resolve();
        }
      );
    });
  }

  protected async setCurrentAddress() {
    return new Promise((resolve, reject) => {
      this.appContext.serviceExecutor
        .execute(
          GET_CURRENT_ADDRESS({
            coordinate: this.props.position.coordinate
          })
        )
        .then((addresses: Address[]) => {
          this.props.setAddressPrediction(addresses);
          this.props.setLoadingPosition(false);
          return resolve();
        });
    });
  }

  protected onBlurTextField = () => {
    // need to complete
    console.log("onBlurTextField");
  };

  protected onClickCreateDeal = () => {
    // need to complete
    console.log("onClickCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: true
    });
  };

  protected onCloseCreateDeal = () => {
    console.log("onCloseCreateDeal");
    this.setState({
      isCreateDealDrawerOpen: false
    });
  };

  protected onClickedCard = () => {
    // need to complete
    console.log("Card Clicked");
  };

  protected onClickedDealSection = () => {
    // need to complete
    console.log("onClickedDealSection");
    this.setState({
      showSearchButton: false
    });
  };

  protected onClickLocationButton = () => {
    // need to complete
    console.log("onClickLocationButton");
    this.setState({
      useAutoLocation: true
    });
  };

  protected onClickSearch = () => {
    // need to complete
    console.log("onClickSearch");
    // this.setState({
    //   showSearchButton: false
    //   Disable this for now, user need internet to access the service anyway
    //   useAutoLocation: false
    // });
    // this.getDeals();
  };

  protected onChangeSearchTextField = (textFieldValue: string) => {
    // TODO need to think about if we need to allow user to search by area. because user will have coordinate by their location.
    // search can be only for item!!!!!!!
    // need to complete
    console.log("onChangeSearchTextField");
    this.setState({
      // currentSearchArea: { areaName: textFieldValue }
    });
  };

  protected onFocusTextField = () => {
    // need to complete
    console.log("onFocusTextField");
    this.setState({
      showSearchButton: true
    });
  };

  render() {
    let {
      isCreateDealDrawerOpen,
      showSearchButton,
      textFieldValue,
      useAutoLocation
    } = this.state;
    return (
      <LandingPageView
        deals={this.props.deals}
        isCreateDealDrawerOpen={isCreateDealDrawerOpen}
        onBlurTextField={this.onBlurTextField}
        onClickCard={this.onClickedCard}
        onClickCreateDeal={this.onClickCreateDeal}
        onCloseCreateDeal={this.onCloseCreateDeal}
        onClickDealSection={this.onClickedDealSection}
        onClickLocationButton={this.onClickLocationButton}
        onClickSearch={this.onClickSearch}
        onChangeSearchTextField={this.onChangeSearchTextField}
        onFocusTextField={this.onFocusTextField}
        showSearchButton={showSearchButton}
        textFieldValue={textFieldValue}
        useAutoLocation={useAutoLocation}
      />
    );
  }
}

const mapStateToProps = (state: ReduxState): Props => ({
  addressesPrediction: state.addressesPrediction,
  deals: state.deals,
  position: state.position,
  selectedAddress: state.selectedAddress
});

export default connect(mapStateToProps, {
  setAddressPrediction,
  setDeals,
  setGeolocation,
  setLoadingPosition
})(LandingPage);
