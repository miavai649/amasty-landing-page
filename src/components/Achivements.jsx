import {
    Box,
    Card, Container,
    Heading,
    Img,
    SimpleGrid,
    Text,
    VStack
} from "@chakra-ui/react";
import React from "react";
import Image1 from "../assets/images/achivements/img1.jpg";
import Image4 from "../assets/images/achivements/img2.jpg";
import Image3 from "../assets/images/achivements/img3.jpg";
import Image2 from "../assets/images/achivements/img4.jpg";

export default function Achivements() {
  const achievements = [
    {
      id: 1,
      img: Image1,
      title: "14+",
      text: "years of experience in e-commerce industry",
      titleColor: "#FFA825"
    },
    {
      id: 2,
      img: Image2,
      title: "1640+",
      text: "completed custom projects",
      titleColor: '#8364FF'
    },
    {
      id: 3,
      img: Image3,
      title: "120k+",
      text: "businesses trust our expertise",
      titleColor: '#FF559E'
    },
    {
      id: 4,
      img: Image4,
      title: "4.8",
      text: "rating on Clutch",
      titleColor: '#4690FF'
    }
  ];

  return (
    <Box bg={"#0E2C2D"} mt="85px" py={"70px"}>
      <Container maxW={"container.xl"}>
        <VStack spacing={"20px"}>
          <Heading color={"white"} size={{ base: "lg", lg: "xl" }} as="h2">
            Why do our clients choose us?
          </Heading>
          <Text color={"white"} fontSize={{ base: "16px", md: "18px" }} textAlign='center'>
            The main benefits of the Shopify Application Development Service
            that our customers like best are:
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: "1", md: "4" }} gap="20px" mt={'85px'}>
          {achievements.map((achievement) => (
              <Card key={achievement.id} align='center' py={'25px'} maxW={{base: 'full', md: '290px'}}>
                  <VStack spacing={'20px'}>
                <Img w={'80px'} src={achievement.img}/>
                  
                      <Heading color={achievement.titleColor} fontSize='50px'>{ achievement.title }</Heading>
                      <Text textAlign={'center'}>{ achievement.text }</Text>
                </VStack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
