import { OAuthProvider } from "./oAuthProvider";

export interface UserProfile {
  id: number;
  dealCreated: number[];
  likedSum: number;
  name: string;
  imageUrl: string;
  oAuthProvider: OAuthProvider;
}
