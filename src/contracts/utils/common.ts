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
  CROWD_SALE: {97: '0x111F6E0d31a4BDF31b949db948b5E575f2494010', 56: ''},
  USDT: {97: '0x1FB66aEc01fe13b829674ffBcA53e829ced4fff4', 56: ''},
  NFT: {97: '0xF93a689aC39f9FC781c4fF2fA13FB886103923e8', 56: ''},
  MARKET: {97: '0x0e24a396Ea7df7dbe804e8967ECb68E3C509Ea77', 56: ''},
  AUCTION: {97: '0x40a11D3F0e29CC657AA69B24b7A4424C152AFd44', 56: ''},
  BNBT: {97: '0x02c0692d225884b132e3EEDe8Bef52Fa17056DB4', 56: ''}
}