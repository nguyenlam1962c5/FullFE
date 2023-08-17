import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getBnbtAbi } from "./utils/getAbis";
import { getBnbtAddress } from "./utils/getAddress";

export default class BnbtContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getBnbtAddress(), getBnbtAbi());
  }
}