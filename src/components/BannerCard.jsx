import { Card, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function BannerCard({ card }) {
  const { description, img } = card;
  return (
    <Card px={'50px'} py={'40px'} bg="#428D6F">
          <VStack>
          <Image src={img} w={ "80px" } />
      <Text fontSize={'18'} color='white' align={"center"}>{description}</Text>
        </VStack>
          
    </Card>
  );
}
