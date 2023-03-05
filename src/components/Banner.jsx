import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/images/BannerCard/heart.png";
import img2 from "../assets/images/BannerCard/medel.png";
import img3 from "../assets/images/BannerCard/rocket.png";
import bannerImg from "../assets/images/bannerImg.webp";
import BannerCard from "./BannerCard";

export default function Banner() {
  const bannerCards = [
    {
      id: 1,
      img: img1,
      description: "Get a scalable Shopify solution tailored to your needs"
    },
    {
      id: 2,
      img: img2,
      description: "Deliver an incredible shopping experience"
    },
    {
      id: 3,
      img: img3,
      description: "Stand out from the competitors with a unique brand identity"
    }
  ];

  return (
    <Box w={"full"} pt={{ base: "5px", lg: "150px" }} h="100%" bg={"#0E2C2D"}>
      <Container maxW={"container.xl"}>
        <Flex
          direction={{ base: "column-reverse", lg: "row-reverse", xl: "row" }}
          alignItems={"center"}
        >
          <Box p={{ base: "5", md: "9" }}>
          <VStack
            spacing={"40px"}
            alignItems={"flex-start"}
            
          >
            <Heading color={"white"} size={{ base: "lg", lg: "2xl" }}>
              Custom Shopify <br /> App Development
            </Heading>
            <Text fontSize={{ base: "16px", lg: "18px" }} color={"white"}>
              Increase the capabilities of your Shopify store and go beyond. Get
              a ready-to-use solution that fits your business needs with Custom
              Shopify App Development Service.
            </Text>
            
            </VStack>
            <Flex justify={{base: 'center', lg: 'flex-start'}}>
            <Button
              mt={'45px'}
              borderRadius={"none"}
              bg="btn.initial"
              _hover={{ bg: "btn.hover" }}
              color="white"
              px={8}
              py={6}
            >
              GET A QUOTE
            </Button>
            </Flex>
          </Box>
          <Image
            maxWidth={{ base: "285px", sm: "450px", lg: "550px", xl: "600px" }}
            src={bannerImg}
          />
        </Flex>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={10}
          alignItems="center"
          pt={"80px"}
          mx={"20px"}
          pb="90px"
        >
          {bannerCards.map((card) => (
            <BannerCard key={card.id} card={card}></BannerCard>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
