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
  CROWD_SALE: {97: '0xA2FE414E565511f754Fa62DAdD4aA494e55683bB', 56: ''},
  USDT: {97: '0x006E41f45C8A825F36199E601B5C81d439D7d976', 56: ''},
  NFT: {97: '0xeAefa1AcA1200a342600BDEDB11557EBC999Bd3F', 56: ''},
  MARKET: {97: '0x4be7dDf375B6Cf12FA69424AB0BfD7A3A935c574', 56: ''},
  AUCTION: {97: '0xE98115e1158971960986f20c40f38bBe3D8162dB', 56: ''},
  BNBT: {97: '0x349866FB05844Ce2de34Ba8D87a159923A963cF1', 56: ''}
}