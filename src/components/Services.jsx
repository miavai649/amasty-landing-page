import { Box, Button, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from '../assets/images/servicesImg/service1.png';
import img2 from '../assets/images/servicesImg/service2.png';
import img3 from '../assets/images/servicesImg/service3.png';
import img4 from '../assets/images/servicesImg/service4.png';
import img5 from '../assets/images/servicesImg/service5.png';
import img6 from '../assets/images/servicesImg/service6.png';
import img7 from '../assets/images/servicesImg/service7.png';
import img8 from '../assets/images/servicesImg/service8.png';
import ServicesCard from "./ServicesCard";

export default function Services() {

    const services = [
        {
            id: 1,
            image: img1,
            text: "Custom functionality"
        },
        {
            id: 2,
            image: img2,
            text: "3rd-party integration"
        },
        {
            id: 3,
            image: img3,
            text: "B2B features"
        },
        {
            id: 4,
            image: img4,
            text: "Marketing"
        },
        {
            id: 5,
            image: img5,
            text: "Inventory management"
        },
        {
            id: 6,
            image: img6,
            text: "Customer care"
        },
        {
            id: 7,
            image: img7,
            text: "Order management"
        },
        {
            id: 8,
            image: img8,
            text: "Design"
        },
    ]

  return (
    <VStack spacing={'80px'}>
      <VStack
        alignItems={{ base: "flex-start", lg: "center" }}
        pt={{ base: "16", lg: "28" }}
      >
        <Box maxW={{sm: '300px', lg: "full"}} pl={'10px'}>
          <Heading
            size={{ base: "lg", lg: "xl" }}
            as="h2"
            ml={"30px"}
            mb='15px'
            textAlign={{ base: "start", lg: "center" }}
          >
            Types of Shopify apps we develop
          </Heading>
        </Box>
        <Box maxW={"1300px"} pl={"30px"} pr={"10px"}>
          <Text textAlign={{ base: "start", lg: "center" }} fontSize={{base: '16px', md: '18px'}}>
            Despite there being more than 6000+ apps in the Shopify App Store
            sometimes a business has specific needs that only custom development
            can solve. An experienced Amasty team can help you to build an
            exclusive solution of any complexity.
          </Text>
        </Box>
      </VStack>
          <SimpleGrid columns={{ base: '1', md: '4'}} columnGap={{md: '100px', lg: '150px'}} rowGap={'40px'} px='50px'>
      {
            services.map(service => <ServicesCard key={service.id} service={service}></ServicesCard>)
        }
          </SimpleGrid>
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
    </VStack>
  );
}
