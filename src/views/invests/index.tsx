declare var window: any;
import React from "react";
import { Flex, Heading, SimpleGrid, Spacer, useDisclosure } from "@chakra-ui/react";
import { ConnectWallet, SuccessModal, WalletInfo } from "../../components";
import { IPackage, IRate, IWalletInfo, TOKEN } from "../../_types_";
import { ethers } from "ethers";
import { packages } from "../../constants";
import InvestCard from "./components/InvestCard";
import CrowSaleContract from "../../contracts/CrowdSaleContract";
import UsdtContract from "../../contracts/UsdtContract";

export default function InvestView() {
  const [wallet, setWallet] = React.useState<IWalletInfo>();
  const [rate, setRate] = React.useState<IRate>({bnbRate: 0, usdtRate: 0});
  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
  const [pak, setPak] = React.useState<IPackage>();
  const [txHash, setTxHash] = React.useState<string>();
  const {isOpen, onClose, onOpen} = useDisclosure();


  const [web3Provider, setWeb3Provider] =
    React.useState<ethers.providers.Web3Provider>();

  const getRate = React.useCallback(async() => {
    const crowdContract = new CrowSaleContract();
    const bnbRate =  await crowdContract.setBnbRate();
    const usdtRate = await crowdContract.setUsdtRate();  
    setRate({bnbRate, usdtRate});

  }, []);

  React.useEffect(() => {
    getRate();
  }, [getRate]);


  const onConnectMetamask = async () => {
    return new Promise ( async (resolve, reject) => {

    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        undefined
      );
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const bigBalance = await signer.getBalance();
      const bnbBalance = Number.parseFloat(
        ethers.utils.formatEther(bigBalance)
      );
      setWallet({ address, bnb: bnbBalance });
      setWeb3Provider(provider);
    } else {
      reject("Install Metamask");
    }
  });
};

  onConnectMetamask();
  
  const handleBuyTK = React.useCallback ( async (pk: IPackage) => {

    if (!web3Provider) return;
      
    try {

      setPak(pk);
      setIsProcessing(true);
      let hash ='';
      const crowdContract = new CrowSaleContract(web3Provider);
      if (pk.token === TOKEN.USDT) {
        const usdtContract = new UsdtContract(web3Provider);
        await usdtContract.approve(crowdContract._contractAddress, pk.amount / rate.bnbRate);
        hash = await crowdContract.buyTokenByUSDT(pk.amount);
      } else {
        hash = await crowdContract.buyTokenByBNBT(pk.amount);
      }
      setTxHash(hash);
      onOpen();

    } catch(er: any) {

      <SuccessModal 
            isOpen={isOpen}
            title=" Suspended trades "
            onClose={onClose}
          />

    }
    setPak(undefined);
    setIsProcessing(false);
  }, [onOpen, web3Provider]);


  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 2, xl: 3 }} mt="50px" spacingY="20px">
        {packages.map((pk, index) => (
          <InvestCard
            pak={pk}
            key={String(index)}
            isBuying={isProcessing && pak?.key === pk.key}
            rate={pk.token === TOKEN.BNBT ? rate.bnbRate : rate.usdtRate}
            walletInfo={wallet}
            onBuy={() => handleBuyTK(pk)}
          />
        ))}
      </SimpleGrid>
      <SuccessModal 
        isOpen={isOpen}
        hash={txHash}
        title=" SUCCESS "
        onClose={onClose}
      />
    </>
  );
}