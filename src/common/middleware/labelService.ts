import { GET_LABEL } from "./service";
import LocalStorage from "../localStorage";
import ServiceExecutor from "./serviceExecutor";

export default class LabelService {
  constructor(
    readonly localStorage: LocalStorage,
    readonly serviceExecutor: ServiceExecutor
  ) {}

  getLabels() {
    return this.checkLabelVersion();
  }

  async checkLabelVersion() {
    const labelName = this.getRequestParamLabelName(this.getLanguage());
    const localStorageLabel: any = this.localStorage.getLabel();
    if (localStorageLabel !== null) {
      const localLabel = JSON.parse(localStorageLabel);
      const remoteLabelVersionObject = await this.getRemoteLabelVersion();
      if (
        localLabel.labelName !== labelName ||
        remoteLabelVersionObject.version !== localLabel.labelVersion
      ) {
        this.setNewLabel();
      } else {
        return localLabel;
      }
    } else {
      this.setNewLabel();
    }
  }

  async setNewLabel() {
    const label = await this.getRemoteLabel();
    this.localStorage.setLabel(JSON.stringify(label));
    this.checkLabelVersion();
  }

  getLanguage() {
    return "chinese_traditional";
  }

  getRemoteLabel() {
    return this.serviceExecutor.execute(
      GET_LABEL(this.getRequestParamLabelName(this.getLanguage()))
    );
  }

  getRemoteLabelVersion() {
    const requestParam =
      this.getRequestParamLabelName(this.getLanguage()) + "_version";
    return this.serviceExecutor.execute(GET_LABEL(requestParam));
  }

  getRequestParamLabelName(language: string) {
    switch (language) {
      default:
        return "label_chinese_traditional";
    }
  }
}
