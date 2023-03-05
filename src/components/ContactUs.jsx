import { Button, Container, Flex, FormControl, Heading, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import React from "react";

export default function ContactUs() {
  return (
    <Container maxW={"container.xl"} mt={"100px"}>
      <VStack spacing={'25px'}>
        <Heading size={{ base: "lg", lg: "xl" }} as="h2" textAlign='center'>
        Entrust us with the development of your Shopify solution!
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "18px" }}
          textAlign="center"
        >
          Fill out the form below, and our specialist will contact you within 24 working hours.
        </Text>
        <Flex w={{base: 'full', md: '400px'}} direction={'column'} alignItems='center' gap={'25px'} >
        <FormControl>
        <Input py={"25px"} w={{base: 'full', md: '400px'}} placeholder="First Name" type='text'/>
        </FormControl>
        <FormControl>
          <Input py={"25px"} w={{base: 'full', md: '400px'}} placeholder="Last Name" type='text'/>
        </FormControl>
        <FormControl>
          <Input py={"25px"} w={{base: 'full', md: '400px'}} placeholder="Email" type='email'/>
        </FormControl>
        <FormControl>
          <Input py={"25px"} w={{base: 'full', md: '400px'}} placeholder="Phone with country code" type='number'/>
        </FormControl>
        <FormControl>
          <Textarea h={'120px'} w={{base: 'full', md: '400px'}} placeholder="Your Message"/>
        </FormControl>
        <Flex justifyContent={"center"}>
        <Button
              borderRadius={"none"}
              bg="btn.initial"
              _hover={{ bg: "btn.hover" }}
              color="white"
              px={8}
              py={5}
              w='300px'
            >
              GET A QUOTE
            </Button>
        </Flex>
        </Flex>
      </VStack>
    </Container>
  );
}
