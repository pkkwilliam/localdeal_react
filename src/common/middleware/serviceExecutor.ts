import { Endpoint, ServiceName } from "./service";
import { GetDealResponse, Address } from "../../modal/deal";

export default class ServiceExecutor {
  constructor(
    private readonly isMock: boolean,
    private readonly serviceUrl: string,
    private readonly headers: any
  ) {}

  public async execute(endpoint: Endpoint): Promise<any> {
    if (this.isMock && endpoint.hasMock) {
      return Promise.resolve(getResponse(endpoint.serviceName));
    } else {
      let headers = this.generateHeaders(endpoint.isMultipartFileRequest);
      let requestParam: string = endpoint.optionalRequestParam
        ? endpoint.optionalRequestParam()
        : "";
      let requestUrl = this.serviceUrl + endpoint.url + requestParam;
      return fetch(requestUrl, {
        body: endpoint.body,
        headers,
        method: endpoint.method,
        mode: "cors"
      })
        .then(result => {
          if (result.status === 204) {
            return Promise.resolve();
          } else {
            return result.json();
          }
        })
        .then(result => Promise.resolve(result))
        .catch(exception => {
          console.warn(
            "Something is wrong while fetch: ",
            requestUrl,
            exception
          );
          return Promise.reject(exception);
        });
    }
  }

  protected isJsonResponse(response: string): boolean {
    try {
      JSON.parse(response);
      return true;
    } catch (ex) {
      return false;
    }
  }

  protected generateHeaders = (isMultipartFileRequest: boolean) => {
    return !isMultipartFileRequest
      ? {
          ...this.headers,
          "Content-Type": "application/json"
        }
      : { ...this.headers };
  };
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
      description:
        '<p><img src="https://storage.cloud.google.com/deal_image/1577871875967"></p>',
      serverIdentifierName: "MACAU",
      title: "澳門 蛋逹王子",
      timestamp: 1577872077582
    },
    {
      address: {
        id: 0,
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
      description:
        '<p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul>',
      serverIdentifierName: "MACAU",
      title: "澳門 CRAZY 蛋逹王子",
      timestamp: 1576871229332
    },
    {
      address: {
        id: 0,
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
      description:
        '<p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul><p>這個東西一點都不好吃啊!!!</p><p><br></p><p><img src="https://storage.cloud.google.com/deal_image/1577872169235"></p><p><br></p><ul><li>都是代碼，怎麽吃啊???</li></ul>',
      serverIdentifierName: "MACAU",
      title: "澳門 CRAZY 蛋逹王子",
      timestamp: 1577872407269
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
