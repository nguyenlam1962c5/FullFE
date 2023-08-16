import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getBNBTAbi } from "./utils/getAbis";
import { getBNBTAddress } from "./utils/getAddress";

export default class BNBTContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getBNBTAddress(), getBNBTAbi());
  }
}