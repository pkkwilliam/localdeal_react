enum StorageType {
  hideAnnouncement = "hideAnnouncement",
}

export default class LocalStorage {
  getHideAnnouncement(): boolean {
    const value = localStorage.getItem(StorageType.hideAnnouncement);
    return value !== null && value === "true";
  }

  setHideAnnouncement(hide: boolean) {
    localStorage.setItem(StorageType.hideAnnouncement, hide.toString());
  }
}
