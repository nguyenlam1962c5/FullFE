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
  CROWDSALE: {97: '0xa018861F83c77D5764CA62b2eebCEbCA7F7724C7', 56: ''},
  USDT: {97: '0x45c54F08875bDd5027BC79EAFcefE864feb8B620', 56: ''},
  NFTCARD: {97: '0x6eF287C49614CDBF12BDe747ECd22F8043B624F4', 56: ''},
  NFTCARDMARKETPLACE: {97: '0xe99D28D54F39240313Bb38813e55A0e43fEb3C3f', 56: ''},
  AUCTION: {97: '0x6320Dc9A241361D9a12C67E54cC195Eb402be123', 56: ''},
  BNBT: {97: '0x1F67a692d8aA2A00144745446d85154697D63f23', 56: ''}
}