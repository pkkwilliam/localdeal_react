export interface OAuthDetail {
  iconUrl: string;
  provider: OAuthProvider;
  requestUrl: string;
  requestUrlNonProd: string;
}

export enum OAuthProvider {
  GOOGLE = "GOOGLE",
  WECHAT = "WECHAT",
  NONE = "NONE",
}
