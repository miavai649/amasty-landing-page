import {
    Box,
    Button, FormControl,
    Heading, HStack, Input,
    Stack,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";

export default function Subcription() {
  return (
    <Stack
      mt={"70px"}
      px={"70px"}
      py="25px"
      direction={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={"center"}
      bg={"#3C3C97"}
      color={"white"}
    >
      {/* left side */}
      <VStack spacing={{base: '15px', md: "0px"}} alignItems={{base: 'center', md: "flex-start"}}>
        <Heading fontSize={"23px"}>
          Never miss an update, join our newsletter club!
        </Heading>
        <Text>Get the news, special offers, digests in your inbox</Text>
      </VStack>

      {/* right side */}
          <Box w={{ base: '350px', md: '500px'}}>
      <HStack spacing={'10px'}>
        <FormControl>
          <Input
            bg={"white"}
            py={"25px"}
            placeholder="Email"
            borderRadius={"md"}
            maxW='full'
            size={"md"}
            type={"email"}
          />
        </FormControl>
        <Button colorScheme={"linkedin"} px="30px" py={"25px"}>
          SUBSCRIBE
        </Button>
      </HStack>
      </Box>
    </Stack>
  );
}
