import { numberFormat } from "@/utils";
import { INftItem, ActionType } from "@/_types_";
import {
  Flex,
  Image,
  Box,
  Text,
  HStack,
  Button,
  VStack,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

interface IProps {
  item: INftItem;
  isBuying?: boolean;
  isDisabled?: boolean;
  onAction?: () => void;
}

export default function NftP2P({ item, isBuying, isDisabled, onAction }: IProps) {
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
        <HStack bg="rgba(0,0,0,0.4)" position="absolute" top={5} px="10px">
          <Text>ID: {item.id.toString().padStart(5, "0")}</Text>
        </HStack>
      </Box>
      <VStack w="full" alignItems="flex-start">
        <Text fontWeight="bold" py="10px" fontSize="20px" textTransform="uppercase" letterSpacing="5px">
          {item.name}
        </Text>
        <HStack w="full">
          <Text color="#fedf5680" fontWeight="bold" fontSize="14px">Price:</Text>
          <Spacer />
          <Text color="#fedf56" fontWeight="bold">{numberFormat( item.price || 0 )} BNBT</Text>
        </HStack>
      </VStack>     

      <Button
        variant={isBuying || isDisabled ? "outline" : "primary"}
        w="full"
        mt="10px"
        onClick={onAction}
        disabled={isBuying || isDisabled}
      >
        {isBuying ? <Spinner /> : (isDisabled ? 'Connect wallet' : 'Buy Now')}
      </Button>
    </Flex>
  );
}
