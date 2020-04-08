import { OAuthProvider } from "./oAuthProvider";

export interface UserProfile {
  id: number;
  name: string;
  imageUrl: string;
  oAuthProvider: OAuthProvider;
}
