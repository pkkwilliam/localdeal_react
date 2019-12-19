const SERVICE_REQUEST_PARAM: string[] = ["areaName", "latitude", "longitude"];

export const GET_DEALS: Endpoint = {
  method: "GET",
  url: "/deals",
  optionalRequestParam: SERVICE_REQUEST_PARAM
};

export const CREATE_DEAL: Endpoint = {
  method: "POST",
  url: "/deals",
  optionalRequestParam: SERVICE_REQUEST_PARAM
};

export interface Endpoint {
  method: string;
  url: string;
  optionalRequestParam?: string[];
}
