import Deal, { Address, GetDealResponse, Coordinate } from "../../modal/deal";
import CurrentArea from "../../modal/currentArea";
import { ReduxActopnTypes } from "./action";
import { UserProfile } from "../../modal/userProfile";
import { OAuthProvider } from "../feature/oAuthProvider";

export interface ReduxState {
  addressesPrediction: Address[];
  deals: Deal[];
  isLoadingPosition: boolean;
  position: CurrentArea;
  selectedAddress: Address;
  userProfile: UserProfile;
}

const initialState: ReduxState = {
  addressesPrediction: [],
  deals: [],
  isLoadingPosition: true,
  position: {
    areaName: "",
    coordinate: {
      latitude: 0,
      longitude: 0
    }
  },
  selectedAddress: {
    area: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    country: "",
    zipCode: ""
  },
  userProfile: {
    id: 0,
    name: "",
    imageUrl: "",
    oAuthProvider: OAuthProvider.NONE
  }
};

export default function(state: ReduxState = initialState, action: any) {
  console.log("Redux", action.type);
  switch (action.type) {
    case ReduxActopnTypes.SET_ADDRESS_PREDICTION:
      return setAddressPrediction(state, action.payload);
    case ReduxActopnTypes.SET_DEALS:
      return setDeals(state, action.payload);
    case ReduxActopnTypes.SET_GEOLOCATION:
      return setPosition(state, action.payload);
    case ReduxActopnTypes.SET_LOADING_POSITION:
      return setLoadingPosition(state, action.payload);
    case ReduxActopnTypes.SET_SELECTED_ADDRESS:
      return setSelectedAddress(state, action.payload);
    case ReduxActopnTypes.SET_USER_PROFILE:
      return setUserProfile(state, action.payload);
    default:
      return state;
  }
}

const setAddressPrediction = (
  state: ReduxState,
  addressesPrediction: Address[]
) => {
  return {
    ...state,
    addressesPrediction
  };
};

const setDeals = (
  state: ReduxState,
  getDealsResponse: GetDealResponse
): ReduxState => {
  return {
    ...state,
    deals: getDealsResponse.deals
  };
};

const setLoadingPosition = (
  state: ReduxState,
  isLoadingPosition: boolean
): ReduxState => {
  return {
    ...state,
    isLoadingPosition
  };
};

const setPosition = (state: ReduxState, coordinate: Coordinate): ReduxState => {
  return {
    ...state,
    position: {
      coordinate
    }
  };
};

const setSelectedAddress = (
  state: ReduxState,
  selectedAddress: Address
): ReduxState => {
  return {
    ...state,
    selectedAddress
  };
};

const setUserProfile = (
  state: ReduxState,
  userProfile: UserProfile
): ReduxState => {
  return {
    ...state,
    userProfile
  };
};
