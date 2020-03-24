import { OAuthProvider } from "../common/feature/oAuthProvider";

export interface UserProfile {
  id: number;
  name: string;
  imageUrl: string;
  oAuthProvider: OAuthProvider;
}
