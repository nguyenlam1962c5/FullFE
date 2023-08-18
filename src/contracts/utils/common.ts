export type AddressType  = {
  97: string;
  56: string;
}

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) { return 97;}
  return parseInt(env);
}


export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
}
export const SMART_ADDRESS = {
  CROWD_SALE: {97: '0x60A2546408bF6B45207D5B960Dba545f7Bb44812', 56: ''},
  USDT: {97: '0x38439B0252751032FB223c5EF3DE75f619d9E55b', 56: ''},
  NFT: {97: '0x4217a619da950e88a58C2F642212794503eCEBA0', 56: ''},
  MARKET: {97: '0xEbfAb08e03DA15d9e594c61935A92ecf6A8C5F88', 56: ''},
  AUCTION: {97: '0xE1613155CA4C4Be20342581701A43D587757c7AB', 56: ''},
  BNBT: {97: '0x224C88D6B2dAC1B260A55c0b3621CEfde07A436c', 56: ''}
}