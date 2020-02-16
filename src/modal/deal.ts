export default interface Deal {
  id?: number;
  address: Address;
  category?: Category;
  discussions?: Discussion[];
  description: string;
  serverIdentifierName?: string;
  title: string;
  timeAvailable?: WeekTime;
  timestamp: number;
  vote?: Vote;
}

export enum Category {
  FOOD_AND_DRINK = "FOOD_AND_DRINK",
  SERVICE = "SERVICE",
  SHOPPING = "SHIPPING"
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

export interface Discussion {
  timestamp: string;
  vote: Vote;
}

export interface Vote {
  downVote: number;
  upVote: number;
}

export interface WeekTime {
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  saturday?: string;
}
