import { Card, CardBody, CardHeader, Container, Heading, Img, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from "../assets/images/guarantiesImg/image1.jpg";
import img2 from "../assets/images/guarantiesImg/image2.jpg";
import img3 from "../assets/images/guarantiesImg/image3.jpg";

export default function ExtraServices() {
  const data = [
    {
      id: 1,
      photo: img1,
      title: "Fastest time-to-market",
      text: "Amasty provides a quick and high-quality service that allows you to stay ahead of trends and not waste time on unnecessary development activities."
    },
    {
      id: 2,
      photo: img2,
      title: "3 payment models",
      text: "Choose one of three payment models that suits you better: fixed price, time and material, and dedicated team."
    },
    {
      id: 3,
      photo: img3,
      title: "Free 2-month support",
      text: "After the end of the project, we provide free 2-month ongoing support services for system operability and synchronization."
    }
  ];

  return (
    <Container maxW={"container.xl"} mt={"100px"}>
      <VStack spacing={"50px"}>
        <Heading size={{ base: "lg", lg: "xl" }} as="h2">
          We also guarantee:
        </Heading>
        <SimpleGrid columns={{base: '1', md: '3'}} gap='20px'>
          {data.map((d) => (
            <Card py={'20px'} shadow={"lg"} key={d.id} align="center">
                <Img w={'65px'} src={d.photo}/>
              <CardHeader pb={'6px'}>
                <Heading fontSize={{base: '20px', lg: '25px'}} fontWeight='semibold'> {d.title}</Heading>
              </CardHeader>
              <CardBody pt={'6px'}>
                <Text fontSize={{base: '14px', lg: '16px'}}>
                  {d.text}
                </Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
