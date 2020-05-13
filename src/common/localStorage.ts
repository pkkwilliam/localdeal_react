export enum StorageType {
  hideAnnouncement = "hideAnnouncement",
  Label = "Label",
}

export default class LocalStorage {
  clear() {
    localStorage.clear();
  }

  getHideAnnouncement(): boolean {
    const value = localStorage.getItem(StorageType.hideAnnouncement);
    return value !== null && value === "true";
  }

  setHideAnnouncement(hide: boolean) {
    localStorage.setItem(StorageType.hideAnnouncement, hide.toString());
  }

  getLabel(): any {
    const label = localStorage.getItem(StorageType.Label);
    return label;
  }

  setLabel(label: any) {
    localStorage.setItem(StorageType.Label, label);
  }
}
