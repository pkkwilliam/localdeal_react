import React, { Component } from "react";
import AppState from "./appState";
import Deal, { Address, Coordinate } from "../../modal/deal";
import { UserProfile } from "../../modal/userProfile";
import { OAuthProvider } from "../../modal/oAuthProvider";

export interface State {
  address: {
    addressesPrediction: Address[];
    selectedAddress: Address;
  };
  createDeal: {
    uploading: boolean;
    progressMessage: string;
  };
  deal: {
    dealDraft?: Deal;
    deals: Deal[];
  };
  position: {
    loadingPosition: boolean;
    coordinate?: Coordinate;
  };
  user: {
    userProfile?: UserProfile;
  };
}

export default class GlobalStateComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      address: {
        addressesPrediction: [],
        selectedAddress: {
          area: "",
          street1: "",
          street2: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
        },
      },
      createDeal: {
        uploading: false,
        progressMessage: "",
      },
      deal: {
        deals: [],
      },
      position: {
        loadingPosition: true,
        coordinate: {
          latitude: 0,
          longitude: 0,
        },
      },
      user: {
        userProfile: {
          id: 0,
          name: "",
          imageUrl: "",
          oAuthProvider: OAuthProvider.NONE,
        },
      },
    };
  }

  render() {
    const { address, createDeal, deal, position, user } = this.state;
    return (
      <AppState.Provider
        value={{
          address: {
            ...address,
            setSelectedAddress: this.setSelectedAddress,
            setPredicteAddresses: this.setPredicteAddresses,
          },
          createDeal: {
            ...createDeal,
            setCreateDealUploading: this.setCreateDealUploading,
            setCreateDealProgressMessage: this.setCreateDealProgressMessage,
          },
          deal: { ...deal, setDeals: this.setDeals },
          position: {
            ...position,
            setGeolocation: this.setGeolocation,
            setLoadingPosition: this.setLoadingPosition,
          },
          user: {
            ...user,
            removeUserProfile: this.removeUserProfile,
            setUserProfile: this.setUserProfile,
          },
        }}
      >
        {this.props.children}
      </AppState.Provider>
    );
  }

  protected removeUserProfile = () => {
    const userProfile: UserProfile = {
      id: 0,
      imageUrl: "",
      name: "",
      oAuthProvider: OAuthProvider.NONE,
    };
    this.setState({
      user: {
        ...this.state.user,
        userProfile,
      },
    });
  };

  protected setDeals = (deals: Deal[]) => {
    this.setState({
      deal: { ...this.state.deal, deals },
    });
  };

  protected setCreateDealUploading = (uploading: boolean) => {
    this.setState({
      createDeal: { ...this.state.createDeal, uploading },
    });
  };

  protected setCreateDealProgressMessage = (progressMessage: string) => {
    this.setState({
      createDeal: { ...this.state.createDeal, progressMessage },
    });
  };

  protected setGeolocation = (coordinate: Coordinate) => {
    this.setState({
      position: { ...this.state.position, coordinate },
    });
  };

  protected setLoadingPosition = (loadingPosition: boolean) => {
    this.setState({
      position: { ...this.state.position, loadingPosition },
    });
  };

  protected setPredicteAddresses = (addressesPrediction: Address[]) => {
    this.setState({
      address: { ...this.state.address, addressesPrediction },
    });
  };

  protected setSelectedAddress = (selectedAddress: Address) => {
    this.setState({
      address: { ...this.state.address, selectedAddress },
    });
  };

  protected setUserProfile = (userProfile: UserProfile) => {
    this.setState({
      user: { ...this.state.user, userProfile },
    });
  };
}
