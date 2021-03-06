import ServiceExecutor from "./middleware/serviceExecutor";
import Transformer from "./transformer";
import chineseTraditionalLabel from "../content/labels/chinese.traditional.json";

export default class AppContext {
  // Deal Refresh
  private ALLOW_DEAL_REFRESH: boolean = false;
  private readonly DEAL_REFRESH_TIME: number = 5 * 1000;

  // API Headers
  private readonly APIKEY = "vKZywb959gExXaEHSwdzdq7MfZu3Nb";
  private readonly X_MADT_APPID: string = "localdeal";
  private readonly X_MADT_APP_VERSION: string = "0.0.1";

  private readonly _serviceExecutor: ServiceExecutor = new ServiceExecutor(
    this.isMock,
    this.serviceUrl,
    this.headers
  );

  private readonly _transformer: Transformer = new Transformer(this.labels);

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
      APIKEY: APIKEY,
      XMADTAPPID: X_MADT_APPID,
      XMADTAPPVERSION: X_MADT_APP_VERSION
    };
  }

  get labels() {
    return chineseTraditionalLabel;
  }

  get isMock(): boolean {
    return false;
  }

  get isProd(): boolean {
    return true;
  }

  get serviceExecutor(): ServiceExecutor {
    return this._serviceExecutor;
  }

  get serviceUrl(): string {
    // TODO need prod url
    return this.isProd ? "https://liuda.site:8082" : "http://127.0.0.1:8081";
  }

  get transformer(): Transformer {
    return this._transformer;
  }
}
