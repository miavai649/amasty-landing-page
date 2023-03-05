import { Box, Card, CardBody, Container, Flex, Heading, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from '../assets/images/stepsImg/step1.png';
import img2 from '../assets/images/stepsImg/step2.png';
import img3 from '../assets/images/stepsImg/step3.png';
import img4 from '../assets/images/stepsImg/step4.png';

export default function WorkFlow() {

  

  return (
    <Box bg={"#F6FFF8"} mt='85px' pt={'120px'} pb='60px'>
      <VStack spacing={'20px'}>
        <Heading size={{ base: "lg", lg: "xl" }} as="h2">
          A step-by-step workflow to meet your goals
        </Heading>
        <Text color={'#436A4C'} fontSize={{base: '16px', md: '18px'}}>
          Shopify Custom App Development Service includes 4 clear steps:
        </Text>
      </VStack>
      <Container mt={'65px'} maxW={"1100px"}>
        <SimpleGrid columns={1} gap='45px'>


          {/* card-1 */}
      <Card
        direction={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        shadow={"xl"}
        borderRadius={"xl"}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "700px" }}
            src={img1}
            alt="Caffe Latte"
          />

          <Stack>
            <CardBody py={"60px"}>
                  <VStack alignItems={"flex-start"} spacing={'15px'}>
                  <Text color={'#64A472'} fontSize={"sm"} fontWeight={"bold"}>STEP 1</Text>
              <Heading fontWeight={'semibold'} fontSize={{base: '20px', md: '25px'}}>
                Consultation and discussing requirement
              </Heading>

              <Text py="2">
                At this step, you share the idea with us and a manager will
                discuss all details of the project, your special wishes, and
                business specifics. Based on this info, we create an advanced
                work plan with a list of tasks and their deadlines.
              </Text>
              </VStack>
            </CardBody>
          </Stack>
        </Flex>
      </Card>

      {/* card-2 */}
      <Card
        direction={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        shadow={"xl"}
        borderRadius={"xl"}
      >
        <Flex direction={{ base: "column", md: "row-reverse" }}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "700px" }}
            src={img2}
            alt="Caffe Latte"
          />

          <Stack>
                <CardBody py={"60px"}>
                  <VStack alignItems={"flex-start"} spacing={'15px'}>
                  <Text color={'#64A472'} fontSize={"sm"} fontWeight={"bold"}>STEP 2</Text>
              <Heading fontWeight={'semibold'} fontSize={{base: '20px', md: '25px'}}>
              Development
              </Heading>

              <Text py="2">
              Next, our team starts the Shopify plugin development process. Every stage of the project is transparent so you can see the progress and make adjustments at any step to make sure you get a high-quality product at the finish.
              </Text>
                  </VStack>
              
            </CardBody>
          </Stack>
        </Flex>
      </Card>

      {/* card-3 */}
      <Card
        direction={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        shadow={"xl"}
        borderRadius={"xl"}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "700px" }}
            src={img3}
            alt="Caffe Latte"
          />

          <Stack>
                <CardBody py={"60px"}>
                  <VStack alignItems={"flex-start"} spacing={'15px'}>
                  <Text color={'#64A472'} fontSize={"sm"} fontWeight={"bold"}>STEP 3</Text>
              <Heading fontWeight={'semibold'} fontSize={{base: '20px', md: '25px'}}>
              Testing
              </Heading>

              <Text py="2">
              After the development part of the process is complete, a QA team moves on to local tests. QA engineers check the solution and fix all technical issues. Then we show you the result and only if it meets your expectations we move to the last step.
              </Text>
                  </VStack>
              
            </CardBody>
          </Stack>
        </Flex>
      </Card>

      {/* card-4 */}
      <Card
        direction={{ base: "column-reverse", md: "row" }}
        overflow="hidden"
        shadow={"xl"}
        borderRadius={"xl"}
      >
        <Flex direction={{ base: "column", md: "row-reverse" }}>
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "700px" }}
            src={img4}
            alt="Caffe Latte"
          />

          <Stack>
                <CardBody py={"60px"}>
                  <VStack alignItems={"flex-start"} spacing={'15px'}>
                  <Text color={'#64A472'} fontSize={"sm"} fontWeight={"bold"}>STEP 4</Text>
              <Heading fontWeight={'semibold'} fontSize={{base: '20px', md: '25px'}}>
              Release
              </Heading>

              <Text py="2">
              When all of the development steps are done, we release the final solution. Even after deployment we'll be in touch with you and help with any questions if they arise.
              </Text>
                  </VStack>
              
            </CardBody>
          </Stack>
        </Flex>
          </Card>
          

        </SimpleGrid>
      </Container>
    </Box>
  );
}
