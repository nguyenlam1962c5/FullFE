import { numberFormat } from "@/utils";
import { INftItem, ActionType, IAuctionInfo } from "@/_types_";
import {
  Flex,
  Image,
  Box,
  Text,
  HStack,
  SimpleGrid,
  Button,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import CountdownTimer from "./CountDownTimer";

interface IProps {
  item: IAuctionInfo;
  isCancel?: boolean;
  isFinishing?: boolean;
  onAction?: (action: ActionType) => void;
  onFinish?: (action: ActionType) => void;
}

export default function NftAuction({ item, isCancel, isFinishing, onAction, onFinish }: IProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bg="#151D14"
      px="10px"
      py="10px"
      borderRadius="10px"
    >
      <Box position="relative">
        <Image
          src={item.image}
          alt={item.name}
          objectFit="cover"
          borderRadius="10px"
        />
        <HStack bg="rgba(0,0,0,0.4)" position="absolute" top={3} color="#e8f4f9cf" px="7px">
          <Text>
            ID: {item.id.toString().padStart(4, "0")} <br />
            Auc...ID: {item.auctionId.toString().padStart(4, "0")}
          </Text>
        </HStack>
      </Box>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold" py="10px" fontSize="20px" textTransform="uppercase" letterSpacing="5px">
          {item.name}
        </Text>
        <HStack w="full">
          <Text color="#fedf5680" fontWeight="bold" fontSize="14px">Highest bid</Text>
          <Spacer />
          <Text color="#fedf56" fontWeight="bold">{numberFormat(item.lastBid)} BNBT</Text>
        </HStack>
      </VStack>     

      <SimpleGrid w="full" columns={2} spacingX="10px" mt="10px">
        <Button variant="outline" disabled>
           <CountdownTimer targetDate={item.endTime * 1000} />
        </Button>
        <Button
          variant={isCancel ? "outline" : "primary"}
          py="3px !important"
          onClick={() => onAction && onAction("AUCTION")}
        >
          {isCancel ? 'Cancel' : 'Place a bid'}
        </Button>  
        <SimpleGrid>
        <Button
          // variant={isFinishing || isDisabled ? "outline" : "primary"}
          variant="primary"
          mt="10px"
          w = "210%"
          // onClick={onFinish}
          // disabled={isFinishing || isDisabled}
        >
          Finish
        </Button>
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
}
