import { Endpoint, GET_DEALS } from "./service";
import { GetDealResponse } from "../modal/deal";

export default class ServiceExecutor {
  constructor(
    private readonly isMock: boolean,
    private readonly serviceUrl: string,
    private readonly headers: any
  ) {}

  public execute(endpoint: Endpoint): Promise<any> {
    if (this.isMock) {
      return getResponse(endpoint);
    } else {
      let requestUrl = this.serviceUrl + endpoint.url + "?areaName=macau";
      return fetch(requestUrl, {
        headers: this.headers,
        method: endpoint.method,
        mode: "cors"
      })
        .then(result => result.json())
        .then(result => result)
        .catch(exception => {
          console.warn(
            "Something is wrong while fetch: ",
            requestUrl,
            exception
          );
        });
    }
  }
}

const getResponse = (endPoint: Endpoint): Promise<any> => {
  switch (endPoint) {
    case GET_DEALS:
      return Promise.resolve(GET_DEALS_RESPONSE);
    default:
      return Promise.reject();
  }
};

const GET_DEALS_RESPONSE: GetDealResponse = {
  deals: [
    {
      address: {
        id: 0,
        area: "",
        street1: "街道1",
        street2: "地下B座",
        city: "澳門",
        state: "",
        zipCode: "",
        country: "澳門",
        coordinate: {
          latitude: 113,
          longitude: 234
        }
      },
      discussions: [],
      description: "蛋逹王",
      title: "全澳最正 蛋逹",
      timeAvailable: {},
      timestamp: "",
      vote: { downVote: 0, upVote: 0 }
    }
  ]
};
