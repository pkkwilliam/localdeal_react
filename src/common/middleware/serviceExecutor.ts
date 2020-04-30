import { Endpoint, ServiceName } from "./service";
import { GetDealResponse, Address } from "../../modal/deal";
import { OAuthProvider } from "../../modal/oAuthProvider";

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
      let headers = this.generateHeaders(endpoint);
      let requestParam: string = endpoint.optionalRequestParam
        ? endpoint.optionalRequestParam()
        : "";
      let requestUrl = endpoint.externalService
        ? endpoint.url
        : this.serviceUrl + endpoint.url + requestParam;
      return (
        fetch(requestUrl, {
          body: endpoint.body,
          credentials: endpoint.externalService ? "omit" : "include", // this is for CORS sending cookies
          headers: endpoint.externalService ? endpoint.customHeader : headers,
          method: endpoint.method,
          mode: "cors",
        })
          .then((result) => {
            const isJsonResponse = result.headers
              .get("content-type")
              ?.match("application/json");
            const status = result.status;
            if (status < 400) {
              if (status === 204 || !isJsonResponse) {
                return Promise.resolve();
              } else {
                return Promise.resolve(result.json());
              }
            } else if (result.status > 400) {
              return Promise.reject();
            }
          })
          // .then(result => Promise.resolve(result))
          .catch((exception) => {
            console.warn(
              "Something is wrong while fetch: ",
              requestUrl,
              exception
            );
            return Promise.reject(exception);
          })
      );
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

  protected generateHeaders = (endpoint: Endpoint) => {
    return !endpoint.isMultipartFileRequest
      ? {
          ...this.headers,
          "Content-Type": "application/json",
        }
      : { ...this.headers };
  };
}

const getResponse = (serviceName: ServiceName): any => {
  console.debug("get mock response:", serviceName);
  switch (serviceName) {
    case ServiceName.GET_DEALS:
      return GET_DEALS_RESPONSE;
    case ServiceName.GET_CURRENT_ADDRESS:
      return GET_POSITION_RESPONSE;
    case ServiceName.GET_SERVER_HEALTH:
      return GET_SERVICE_HEALTH;
    case ServiceName.GET_USER_PROFILE:
      return GET_USER_PROFILE;
    default:
      return Promise.reject();
  }
};

const GET_DEALS_RESPONSE: GetDealResponse = {
  deals: [
    {
      id: 1,
      address: "Mock Address 2",
      attendCount: 5,
      createdBy: {
        id: 0,
        name: "Mock User",
        imageUrl:
          "https://www.picclickimg.com/d/l400/pict/163647152800_/Cubd-Collectibles-Disney-Frozen-Elsa-Small-Soft-Stuffed.jpg",
        oAuthProvider: OAuthProvider.GOOGLE,
      },
      description:
        '<p><img src="https://storage.cloud.google.com/deal_image/1577871875967"></p>',
      filesUrl: [
        "https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg",
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      ],
      serverIdentifierName: "MACAU",
      title: "澳門 蛋逹王子",
      timestamp: 1577872077582,
      likedCount: 1378,
      verifiedUpLikedUserCount: 521,
      liked: false,
    },
    {
      id: 1,
      address: "Mock Address 2",
      attendCount: 5,
      description:
        "The content of ExpansionPanels is mounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the unmountOnExit in TransitionProps:",
      filesUrl: [
        "https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg",
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg",
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg",
      ],
      serverIdentifierName: "MACAU",
      title: "澳門 CRAZY 蛋逹王子",
      timestamp: 1576871229332,
      likedCount: 0,
      verifiedUpLikedUserCount: 0,
      liked: false,
    },
    {
      id: 2,
      address: "Mock Address 2",
      attendCount: 0,
      description:
        "STTSTSDFounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the unmountOnExit in TransitionProps:",
      filesUrl: [
        "https://open-shelf.ca/wp-content/uploads/2015/03/twitter-logo-small-1024x576@2x.jpg",
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      ],
      serverIdentifierName: "MACAU",
      title: "澳門 CRAZY 蛋逹王子",
      timestamp: 1576871229332,
      likedCount: 0,
      verifiedUpLikedUserCount: 0,
      liked: false,
    },
  ],
};

const GET_POSITION_RESPONSE: Address[] = [
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街166號",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街166號",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街148號",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門漁翁街90號",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門花地瑪堂區",
    city: "花地瑪堂區",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門",
    country: "澳門",
  },
  {
    id: 0,
    area: "澳門",
    formattedAddress: "澳門",
    country: "澳門",
  },
];

const GET_SERVICE_HEALTH = {
  up: true,
};

const GET_USER_PROFILE = {
  id: 0,
  name: "Mock User",
  imageUrl:
    "https://www.picclickimg.com/d/l400/pict/163647152800_/Cubd-Collectibles-Disney-Frozen-Elsa-Small-Soft-Stuffed.jpg",
  oAuthProvider: "GOOGLE",
};
