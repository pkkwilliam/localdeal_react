import ServiceExecutor from "../middleware/serviceExecutor";

export default class AppContext {
  private ALLOW_DEAL_REFRESH: boolean = true;
  private readonly DEAL_REFRESH_TIME: number = 5 * 1000;

  // API Headers
  private readonly APIKEY = "vKZywb959gExXaEHSwdzdq7MfZu3Nb";
  private readonly BASE_URL: string = "http://localhost:8080";
  private readonly X_MADT_APPID: string = "localdeal";
  private readonly X_MADT_APP_VERSION: string = "0.0.1";

  private readonly _serviceExecutor: ServiceExecutor = new ServiceExecutor(
    this.isMock,
    this.serviceUrl,
    this.headers
  );

  get allowDealRefresh(): boolean {
    return this.ALLOW_DEAL_REFRESH;
  }

  set allowDealRefresh(isAllowDealRefresh: boolean) {
    this.ALLOW_DEAL_REFRESH = isAllowDealRefresh;
  }

  get dealRefreshTime(): number {
    return this.DEAL_REFRESH_TIME;
  }

  get headers() {
    let { APIKEY, X_MADT_APPID, X_MADT_APP_VERSION } = this;
    return {
      "Content-Type": "application/json",
      APIKEY: APIKEY,
      X_MADT_APPID: X_MADT_APPID,
      X_MADT_APP_VERSION: X_MADT_APP_VERSION
    };
  }

  get isMock(): boolean {
    return false;
  }

  get isProd(): boolean {
    return false;
  }

  get serviceExecutor(): ServiceExecutor {
    return this._serviceExecutor;
  }

  get serviceUrl(): string {
    // TODO need prod url
    return this.isProd ? "http://127.0.0.1:8080" : "http://127.0.0.1:8080";
  }

  get url(): string {
    return this.BASE_URL;
  }
}
