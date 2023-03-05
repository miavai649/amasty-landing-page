import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export default function ServicesCard({service}) {

    const { image, text } = service;

  return (
          <VStack w={'172px'}>
              <Image boxSize={'50px'} src={image}/>
              <Text>{ text }</Text>
          </VStack>
  )
}
