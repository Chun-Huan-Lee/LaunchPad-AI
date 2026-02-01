
export interface Feature {
  name: string;
  description: string;
  emoji: string;
}

export interface SocialPosts {
  twitter: string[];
  linkedin: string[];
}

export interface MarketingAssets {
  projectName: string;
  taglines: string[];
  elevatorPitch: string;
  features: Feature[];
  socialPosts: SocialPosts;
}
