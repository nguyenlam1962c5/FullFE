import { SuccessModal } from "@/components";
import BnbtContract from "@/contracts/BnbtContract";
import MarketContract from "@/contracts/MarketContract";
import NftContract from "@/contracts/NftContract";
import { useAppSelector } from "@/reduxs/hooks";
import { INftItem } from "@/_types_";
import { SimpleGrid, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import NftP2P from "./components/NftMarket";

export default function MarketView() {
  const { web3Provider, wallet } = useAppSelector((state) => state.account);
  const [nfts, setNfts] = React.useState<INftItem[]>([]);
  const [currentNft, setCurrentNft] = React.useState<INftItem>();
  const [txHash, setTxHash] = React.useState<string>();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const getListedNfts = React.useCallback(async () => {
    try {
      const marketContract = new MarketContract();
      const nftContract = new NftContract();

      const listedList = await marketContract.getNFTListedOnMarketplace();
      const nftList = await nftContract.getNftInfo(listedList);
      setNfts(nftList);
    } catch (ex) {}
  }, []);

  React.useEffect(() => {
    getListedNfts();
  }, [getListedNfts]);

  const handleBuy = React.useCallback(async (nft: INftItem) => {    
    if (!web3Provider || !nft.price) return;
    try {
      setCurrentNft(nft);
      const marketContract = new MarketContract(web3Provider);
      const bnbtContract = new BnbtContract(web3Provider);      
      await bnbtContract.approve(marketContract._contractAddress, nft.price);
      const tx = await marketContract.buyNft(nft.id, nft.price);
      setTxHash(tx);
      onOpen();
    } catch (er: any) {
    }
    setCurrentNft(undefined);
  }, [onOpen, web3Provider]);

  return (
    <>
      <SimpleGrid columns={3} spacing="20px">
        {nfts.map((nft) => (
          <NftP2P
            item={nft}
            key={nft.id}
            isDisabled={!wallet}
            isBuying={currentNft?.id === nft.id}
            onAction={() => handleBuy(nft)}
          />
        ))}
      </SimpleGrid>
      <SuccessModal
        title=" SUCCESS "
        hash={txHash}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}
