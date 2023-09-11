  import { Button, HStack, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { numberFormat, showSortAddress } from '../utils';

interface IProps {
  address?: string;
  amount: number;
}

export default function WalletInfo({address, amount}: IProps) {
  return (
    <Button variant="outline" >
      <HStack>
        <Text>{showSortAddress(address)}/</Text>
        <Text>{numberFormat(amount)}</Text>
      </HStack>
    </Button>
  )
}
