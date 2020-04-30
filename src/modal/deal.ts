import { UserProfile } from "./userProfile";

export default interface Deal {
  id: number;
  address?: string;
  attendCount: number;
  category?: Category;
  createdBy?: UserProfile;
  description: string;
  filesUrl: string[];
  liked: boolean;
  likedCount: number;
  serverIdentifierName?: string;
  title: string;
  timestamp: number;
  verifiedUpLikedUserCount: number;
}

export enum Category {
  FOOD_AND_DRINK = "FOOD_AND_DRINK",
  SERVICE = "SERVICE",
  SHOPPING = "SHIPPING",
}

export interface GetDealResponse {
  deals: Deal[];
}

export interface Address {
  id?: number;
  area?: string;
  formattedAddress?: string;
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country: string;
  coordinate?: Coordinate;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}
