import getChainIdFromEnv, { AddressType, SMART_ADDRESS } from "./common";

const getAddress = (address: AddressType) => {
  const CHAIN_ID = getChainIdFromEnv() as keyof AddressType ;
  return address[CHAIN_ID]
};

export const getCrowdSaleAddress =()=> getAddress(SMART_ADDRESS.CROWDSALE);
export const getNFTCardAddress =()=> getAddress(SMART_ADDRESS.NFTCARD);
export const getNFTCardMarketplacetAddress =()=> getAddress(SMART_ADDRESS.NFTCARDMARKETPLACE);
export const getAuctionAddress =()=> getAddress(SMART_ADDRESS.AUCTION);
export const getBNBTAddress =()=> getAddress(SMART_ADDRESS.BNBT);
export const getUSDTAddress =()=> getAddress(SMART_ADDRESS.USDT);