import CurrentArea from "../../modal/currentArea";
import Deal, { Address } from "../../modal/deal";

const AREA_NAME_URL_PARAMETER: string = "areaName";
const LATITUDE_URL_PARAMETER: string = "latitude";
const LONGITUDE_URL_PARAMETER: string = "longitude";

export enum ServiceName {
  CREATE_DEAL = "CREATE_DEAL",
  GET_DEALS = "GET_DEALS",
  GET_CURRENT_ADDRESS = "GET_CURRENT_ADDRESS"
}

export const CREATE_DEAL = (currentArea: CurrentArea, deal: Deal): Endpoint => {
  return {
    body: deal,
    method: "POST",
    url: "/deals",
    optionalRequestParam: () =>
      generateCurrentAreaRequestParameter(currentArea),
    serviceName: ServiceName.CREATE_DEAL
  };
};

export const GET_CURRENT_ADDRESS = (currentArea: CurrentArea) => {
  return {
    method: "GET",
    url: "/position",
    optionalRequestParam: () =>
      generateCurrentAreaRequestParameter(currentArea),
    serviceName: ServiceName.GET_CURRENT_ADDRESS
  };
};

export const GET_DEALS = (address: Address): Endpoint => {
  return {
    method: "GET",
    url: "/deals",
    optionalRequestParam: () =>
      `?${generateParameter(AREA_NAME_URL_PARAMETER, address.area || "")}`,
    serviceName: ServiceName.GET_DEALS
  };
};

const generateCurrentAreaRequestParameter = (
  currentArea: CurrentArea
): string => {
  console.debug(
    "service.ts: generateCurrentAreaRequestParameter -",
    currentArea
  );
  if (currentArea.areaName) {
    return `?${generateParameter(
      AREA_NAME_URL_PARAMETER,
      currentArea.areaName
    )}`;
  } else if (currentArea.coordinate) {
    return `?${LATITUDE_URL_PARAMETER}=${currentArea.coordinate.latitude}&${LONGITUDE_URL_PARAMETER}=${currentArea.coordinate.longitude}`;
  } else {
    console.warn("CurrentArea input might be invalid");
    return "";
  }
};

const generateParameter = (key: string, value: string) => {
  return `${key}=${value}`;
};

export interface Endpoint {
  body?: any;
  errorReturn?: any;
  method: string;
  url: string;
  optionalRequestParam: () => string;
  serviceName: ServiceName;
}
