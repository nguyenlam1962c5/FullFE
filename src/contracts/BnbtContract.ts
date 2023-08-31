import { ethers } from "ethers";
import { BaseInterface, Erc20 } from "./interfaces";
import { getBnbAbi } from "./utils/getAbis";
import { getBnbAddress } from "./utils/getAddress";

export default class BnbtContract extends Erc20 {
  constructor(provider: ethers.providers.Web3Provider) {
    super(provider, getBnbAddress(), getBnbAbi());
  }
}