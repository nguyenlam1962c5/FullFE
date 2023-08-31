export interface IWalletInfo {
  address: string;
  bnb: number;
}

export interface IRate {
  usdtRate: number;
  bnbRate: number;
}

export enum TOKEN {
  BNBT = "BNBT",
  USDT = "USDT",
}

export interface IPackage {
  key: string;
  name: string;
  amount: number;
  icon: string;
  bg: string;
  token: TOKEN;
}

export interface IMenu {
  name: string;
  url: string;
}

export interface IAttribute {
  trait_type: string;
  value: string | number;
}

export interface INftItem {
  id: number;
  name?: string;
  description?: string;
  image: string;
  attributes?: IAttribute[];
  //Listing
  price?: number;
  author?: string; 
  // _price: number;
}

export type ActionType = "LIST" | "UNLIST" | "TRANSFER" | "AUCTION" | "BUYING";

export interface IAuctionInfo extends  INftItem {
  auctionId: number;
  auctioneer: string;
  tokenId: number;
  initialPrice: number;
  previousBidder: string;
  lastBid: number;
  lastBidder: string;
  startTime: number;
  endTime: number;
  completed: boolean;
  active: boolean;
}
