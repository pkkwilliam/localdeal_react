import { GET_LABEL } from "./service";
import LocalStorage from "../localStorage";
import ServiceExecutor from "./serviceExecutor";
import chinese_traditional from "../../content/labels/chinese.traditional.json";

export default class LabelService {
  private static remoteLabel = null;

  constructor(
    readonly localStorage: LocalStorage,
    readonly serviceExecutor: ServiceExecutor
  ) {}

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
        this.remoteLabel = localLabel;
      }
    } else {
      this.setNewLabel();
    }
  }

  async setNewLabel() {
    const label = await this.getRemoteLabel();
    this.localStorage.setLabel(JSON.stringify(label));
    this.remoteLabel = label;
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

  get label() {
    if (LabelService.remoteLabel === null) {
      return chinese_traditional;
    }
    return LabelService.remoteLabel;
  }

  set remoteLabel(label: any) {
    LabelService.remoteLabel = label;
  }
}
