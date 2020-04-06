import React from "react";
import ApplicationComponent from "../../common/applicationComponent";
import Deal, { Coordinate, Address, GetDealResponse } from "../../modal/deal";
import { LandingPageView } from ".";
import {
  GET_CURRENT_ADDRESS,
  GET_DEALS,
} from "../../common/middleware/service";
import "../../App.css";

export interface State {
  isLoading: boolean;
}

export default class LandingPage extends ApplicationComponent<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    await this.setCurrentPosition();
    await this.setCurrentAddress();
    await this.executeGetDeals();
  }

  protected async setCurrentPosition() {
    if (this.appContext.isMock) {
      return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
      this.appContext.transformer.getCurrentLocation(
        (coordinate: Coordinate) => {
          console.debug("Current Coordinate: ", coordinate);
          // this.props.setGeolocation(coordinate);
          this.appState.position.setGeolocation(coordinate);
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
            coordinate: this.appState.position.coordinate,
          })
        )
        .then((addresses: Address[]) => {
          this.appState.address.setPredicteAddresses(addresses);
          this.appState.position.setLoadingPosition(false);
          this.appState.address.setSelectedAddress(addresses[0]);
          return resolve();
        });
    });
  }

  protected executeGetDeals = () => {
    if (this.appState.address.selectedAddress?.area) {
      this.appContext.serviceExecutor
        .execute(GET_DEALS(this.appState.address.selectedAddress))
        .then((getDealResponse: GetDealResponse) => {
          this.setState({
            isLoading: false,
          });
          this.appState.deal.setDeals(getDealResponse.deals);
        });
    }
  };

  protected sortDeals(inputDeals: Deal[]): Deal[] {
    return inputDeals.sort((deal1, deal2) => {
      return deal2.timestamp - deal1.timestamp;
    });
  }

  render() {
    const sortedDeal: Deal[] = this.sortDeals(
      this.appState.deal.deals ? this.appState.deal.deals : []
    );
    return (
      <LandingPageView
        deals={sortedDeal}
        isLoadingDeals={this.state.isLoading}
      />
    );
  }
}
