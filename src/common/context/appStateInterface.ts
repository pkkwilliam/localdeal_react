import Deal, { Address, Coordinate } from "../../modal/deal";
import { UserProfile } from "../../modal/userProfile";

export default interface AppStateInterface {
  address: {
    addressesPrediction: Address[];
    selectedAddress?: Address;
    setPredicteAddresses: (addresses: Address[]) => {};
    setSelectedAddress: (address: Address) => {};
  };
  banner: {
    show: boolean;
    progressMessage: string;
    setShowBanner: (uploading: boolean) => {};
    setBannerProgressMessage: (progressMessage: string) => {};
  };
  deal: {
    deals: Deal[];
    draftDeal?: Deal;
    setDeals: (deals: Deal[]) => {};
  };
  labels: {
    labels: {};
    setLabels: (labels: {}) => {};
  };
  position: {
    loadingPosition: boolean;
    coordinate: Coordinate;
    setGeolocation: (coordinate: Coordinate) => {};
    setLoadingPosition: (loadingPosition: boolean) => {};
  };
  service: {
    serviceUp: boolean;
    setServiceUp: (serviceUp: boolean) => {};
  };
  user: {
    userProfile: UserProfile;
    setUserProfile: (userProfile: UserProfile) => {};
    removeUserProfile: () => {};
  };
}
