import { Coordinate, GetDealResponse, Address } from "../../modal/deal";
import { type } from "os";

export enum ReduxActopnTypes {
  SET_ADDRESS_PREDICTION = "SET_ADDRESS_PREDICTION",
  SET_DEALS = "SET_DEAL",
  SET_LOADING_POSITION = "SET_LOADING_POSITION",
  SET_GEOLOCATION = "SET_GEOLOCATION",
  SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS"
}

export const setAddressPrediction = (addresses: Address[]) => {
  return function(dispatch: any) {
    dispatch({
      type: ReduxActopnTypes.SET_ADDRESS_PREDICTION,
      payload: addresses
    });
  };
};

export const setGeolocation = (coordinate: Coordinate) => {
  return function(dispatch: any) {
    dispatch({
      type: ReduxActopnTypes.SET_GEOLOCATION,
      payload: coordinate
    });
  };
};

export const setLoadingPosition = (isLoadingPosition: boolean) => {
  return function(disptach: any) {
    disptach({
      type: ReduxActopnTypes.SET_LOADING_POSITION,
      payload: isLoadingPosition
    });
  };
};

export const setDeals = (getDealsResponse: GetDealResponse) => {
  return function(dispatch: any) {
    dispatch({
      type: ReduxActopnTypes.SET_DEALS,
      payload: getDealsResponse
    });
  };
};

export const setSelectedAddress = (address: Address) => {
  return function(dispatch: any) {
    dispatch({
      type: ReduxActopnTypes.SET_SELECTED_ADDRESS,
      payload: address
    });
  };
};
