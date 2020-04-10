import CurrentArea from "../../modal/currentArea";
import Deal, { Address } from "../../modal/deal";
import VoteRequest from "../../modal/voteRequest";

const AREA_NAME_URL_PARAMETER: string = "areaName";
const AUTHORIZATION_CODE_PARAMETER: string = "authorizationCode";
const LATITUDE_URL_PARAMETER: string = "latitude";
const LONGITUDE_URL_PARAMETER: string = "longitude";
const REDIRECT_URL_PARAMETER: string = "redirectUrl";

export enum ServiceName {
  CREATE_DEAL = "CREATE_DEAL",
  CREATE_VOTE = "CREATE_VOTE",
  GET_CURRENT_ADDRESS = "GET_CURRENT_ADDRESS",
  GET_DEALS = "GET_DEALS",
  GET_PRESIGNED_URL = "GET_PRESIGNED_URL",
  GET_SERVER_HEALTH = "GET_SERVER_HEALTH",
  GET_USER_PROFILE = "GET_USER_PROFILE",
  LOGIN_OAUTH_GOOGLE = "LOGIN_OAUTH_GOOGLE",
  LOGOUT_OAUTH = "LOGOUT_OAUTH",
  TEST = "TEST",
  UPLOAD_IMAGE = "UPLOAD_IMAGE",
  UPLOAD_IMAGE_SIGNED_URL = "UPLOAD_IMAGE_SIGNED_URL",
}

export const CREATE_DEAL = (deal: Deal): Endpoint => {
  return {
    body: JSON.stringify(deal),
    externalService: false,
    hasMock: false,
    isMultipartFileRequest: false,
    method: "POST",
    url: "/deals",
    serviceName: ServiceName.CREATE_DEAL,
  };
};

export const CREATE_VOTE = (voteRequest: VoteRequest) => {
  return {
    body: JSON.stringify(voteRequest),
    externalService: false,
    hasMock: false,
    isMultipartFileRequest: false,
    method: "POST",
    url: "/vote",
    serviceName: ServiceName.CREATE_VOTE,
  };
};

export const GET_CURRENT_ADDRESS = (currentArea: CurrentArea) => {
  return {
    externalService: false,
    method: "GET",
    hasMock: true,
    isMultipartFileRequest: false,
    url: "/position",
    optionalRequestParam: () =>
      generateCurrentAreaRequestParameter(currentArea),
    serviceName: ServiceName.GET_CURRENT_ADDRESS,
  };
};

export const GET_DEALS = (address: Address): Endpoint => {
  return {
    externalService: false,
    hasMock: true,
    isMultipartFileRequest: false,
    method: "GET",
    url: "/deals",
    optionalRequestParam: () =>
      `?${generateParameter(AREA_NAME_URL_PARAMETER, address.area || "")}`,
    serviceName: ServiceName.GET_DEALS,
  };
};

export const GET_PRESIGNED_URL = (
  fileType: string,
  fileName: string
): Endpoint => {
  return {
    externalService: false,
    hasMock: false,
    isMultipartFileRequest: false,
    method: "GET",
    url: "/file",
    optionalRequestParam: () => `?contentType=${fileType}&fileName=${fileName}`,
    serviceName: ServiceName.GET_PRESIGNED_URL,
  };
};

export const GET_SERVER_HEALTH = (): Endpoint => ({
  externalService: false,
  hasMock: true,
  isMultipartFileRequest: false,
  method: "GET",
  url: "/health",
  serviceName: ServiceName.GET_SERVER_HEALTH,
});

export const GET_USER_PROFILE = (): Endpoint => ({
  externalService: false,
  hasMock: true,
  isMultipartFileRequest: false,
  method: "GET",
  url: "/userProfile",
  serviceName: ServiceName.GET_USER_PROFILE,
});

export const LOGIN_OAUTH_GOOGLE = (
  authorizationCode: string,
  redirectUrl: string
): Endpoint => {
  return {
    externalService: false,
    hasMock: false,
    isMultipartFileRequest: false,
    method: "POST",
    url: "/oauth/google",
    optionalRequestParam: () =>
      generateMultipleUrlParameters([
        AUTHORIZATION_CODE_PARAMETER,
        authorizationCode,
        REDIRECT_URL_PARAMETER,
        redirectUrl,
      ]),
    serviceName: ServiceName.LOGIN_OAUTH_GOOGLE,
  };
};

export const LOGOUT_OAUTH = (): Endpoint => ({
  externalService: false,
  hasMock: false,
  isMultipartFileRequest: false,
  method: "DELETE",
  url: "/oauth",
  serviceName: ServiceName.LOGOUT_OAUTH,
});

export const UPLOAD_IMAGE = (image: any): Endpoint => {
  return {
    body: image,
    externalService: false,
    hasMock: false,
    isMultipartFileRequest: true,
    method: "POST",
    url: "/file/multipart",
    serviceName: ServiceName.UPLOAD_IMAGE,
  };
};

export const UPLOAD_IMAGE_SIGNED_URL = (
  image: File,
  signedUrl: string
): Endpoint => {
  return {
    body: image,
    customHeader: { "Content-Type": image.type },
    externalService: true,
    hasMock: false,
    isMultipartFileRequest: true,
    method: "PUT",
    url: signedUrl,
    serviceName: ServiceName.UPLOAD_IMAGE_SIGNED_URL,
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

const generateMultipleUrlParameters = (keyAndValue: string[]): string => {
  let parameter: string = "?";
  if (keyAndValue.length % 2 === 0) {
    for (let i = 0; i < keyAndValue.length; i += 2) {
      if (i !== 0) {
        parameter += "&";
      }
      parameter += `${keyAndValue[i]}=${keyAndValue[i + 1]}`;
    }
  }
  console.debug("generateUrlParameter:", parameter);
  return parameter;
};

const generateParameter = (key: string, value: string) => {
  return `${key}=${value}`;
};

export interface Endpoint {
  body?: any;
  customHeader?: {};
  errorReturn?: any;
  externalService: boolean;
  hasMock: boolean;
  isMultipartFileRequest: boolean;
  method: string;
  url: string;
  optionalRequestParam?: () => string;
  serviceName: ServiceName;
}
