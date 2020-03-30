import Deal, { Address, Coordinate } from "../../modal/deal";
import CurrentArea from "../../modal/currentArea";
import { UserProfile } from "../../modal/userProfile";

export default interface AppStateInterface {
  address: {
    addressesPrediction: Address[];
    selectedAddress?: Address;
    setPredicteAddresses: (addresses: Address[]) => {};
    setSelectedAddress: (address: Address) => {};
  };
  deal: {
    deals: Deal[];
    draftDeal?: Deal;
    setDeals: (deals: Deal[]) => {};
  };
  position: {
    loadingPosition: boolean;
    coordinate: Coordinate;
    setGeolocation: (coordinate: Coordinate) => {};
    setLoadingPosition: (loadingPosition: boolean) => {};
  };
  user: {
    userProfile: UserProfile;
    setUserProfile: (userProfile: UserProfile) => {};
    removeUserProfile: () => {};
  };
}
