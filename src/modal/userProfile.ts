import { OAuthProvider } from "./oAuthProvider";

export interface UserProfile {
  id: number;
  name: string;
  nickName?: string;
  imageUrl: string;
  oAuthProvider: OAuthProvider;
}
