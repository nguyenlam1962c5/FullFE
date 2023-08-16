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
  CROWDSALE: {97: '0xFb7dF61442FE79470B567e5ee11aA7c1854ecF02', 56: ''},
  USDT: {97: '0x45c54F08875bDd5027BC79EAFcefE864feb8B620', 56: ''},
  NFTCARD: {97: '0x6eF287C49614CDBF12BDe747ECd22F8043B624F4', 56: ''},
  NFTCARDMARKETPLACE: {97: '0xd54be582290dAf1C9Dc37FABfb21753E0c92e394', 56: ''},
  AUCTION: {97: '0x97FC578f96E57E9A107ad4753CAdf0cBA75ec493', 56: ''},
  BNBT: {97: '0x1F67a692d8aA2A00144745446d85154697D63f23', 56: ''}
}