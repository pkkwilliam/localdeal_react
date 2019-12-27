import { Endpoint, ServiceName } from "./service";
import { GetDealResponse, Address } from "../../modal/deal";

export default class ServiceExecutor {
  constructor(
    private readonly isMock: boolean,
    private readonly serviceUrl: string,
    private readonly headers: any
  ) {}

  public async execute(endpoint: Endpoint): Promise<any> {
    if (this.isMock) {
      return Promise.resolve(getResponse(endpoint.serviceName));
    } else {
      let requestParam: string = endpoint.optionalRequestParam();
      let requestUrl = this.serviceUrl + endpoint.url + requestParam;
      console.log(requestUrl);
      return fetch(requestUrl, {
        headers: this.headers,
        method: endpoint.method,
        mode: "cors"
      })
        .then(result => result.json())
        .then(result => Promise.resolve(result))
        .catch(exception => {
          console.warn("Something is wrong while fetch: ", requestUrl);
          return Promise.reject(exception);
        });
    }
  }
}

const getResponse = (serviceName: ServiceName): any => {
  switch (serviceName) {
    case ServiceName.GET_DEALS:
      return GET_DEALS_RESPONSE;
    case ServiceName.GET_CURRENT_ADDRESS:
      return GET_POSITION_RESPONSE;
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
        formattedAddress: "",
        street1: "街道1",
        street2: "地下B座",
        city: "澳門",
        state: "",
        zipCode: "",
        country: "澳門",
        coordinate: { latitude: 113, longitude: 234 }
      },
      description: "蛋逹王",
      title: "澳門 蛋逹王子",
      timestamp: 1576743420199
    }
  ]
};

const GET_POSITION_RESPONSE: Address[] = [
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門馬交石巷信昌工業大廈",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街166號",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街148號",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街90號",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門花地瑪堂區",
    city: "花地瑪堂區",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門",
    country: "澳門"
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門",
    country: "澳門"
  }
];
