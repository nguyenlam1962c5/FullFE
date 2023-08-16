import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getUSDTAbi } from "./utils/getAbis";
import { getUSDTAddress } from "./utils/getAddress";

export default class USDTContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getUSDTAddress(), getUSDTAbi());
  }
}