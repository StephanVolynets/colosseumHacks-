export type Platform = "twitch" | "youtube" | "kick" | "rumble";
export type StablecoinType = "usdc" | "usdt" | "dai";
export type TransactionStatus = "pending" | "completed" | "failed";

export interface Wallet {
  address: string;
  provider: string;
  connected: boolean;
}

export interface StablecoinBalance {
  type: StablecoinType;
  balance: number;
  symbol: string;
}

export interface Creator {
  id: string;
  name: string;
  platform: Platform;
  avatar: string;
  verified: boolean;
}

export interface Transaction {
  id: string;
  creatorId: string;
  creatorName: string;
  platform: Platform;
  amount: number;
  stablecoin: StablecoinType;
  status: TransactionStatus;
  timestamp: Date;
  txHash?: string;
  fee: number;
  conversionRate: number;
}

export interface Settings {
  defaultPlatform: Platform;
  preferredStablecoins: StablecoinType[];
  autodonationEnabled: boolean;
  recurringDonations: RecurringDonation[];
  donationThresholds: DonationThreshold[];
}

export interface RecurringDonation {
  id: string;
  creatorId: string;
  amount: number;
  frequency: "daily" | "weekly" | "monthly";
  stablecoin: StablecoinType;
}

export interface DonationThreshold {
  id: string;
  triggerAmount: number;
  donationAmount: number;
  enabled: boolean;
}
