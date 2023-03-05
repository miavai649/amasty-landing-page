import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import brand1 from "../assets/images/BrandLogos/brand1.png";
import brand2 from "../assets/images/BrandLogos/brand2.png";
import brand3 from "../assets/images/BrandLogos/brand3.png";
import brand4 from "../assets/images/BrandLogos/brand4.png";
import brand5 from "../assets/images/BrandLogos/brand5.png";
import brand6 from "../assets/images/BrandLogos/brand6.png";

export default function Brands() {
  const brands = [
    {
      id: 1,
      img: brand1
    },
    {
      id: 2,
      img: brand2
    },
    {
      id: 3,
      img: brand3
    },
    {
      id: 4,
      img: brand4
    },
    {
      id: 5,
      img: brand5
    },
    {
      id: 6,
      img: brand6
    }
  ];

  return (
      <Box bg={"#F6FFF8"} pt={{ base: '16', lg: "28" }} pb={{ base: '7', md: '36', lg: '28'}}>
          <Box maxW={{sm: '300px', lg: "full"}} pl={'10px'}>
          <Heading
            size={{ base: "lg", lg: "xl" }}
            as="h2"
            ml={"30px"}
            mb='50px'
            textAlign={{ base: "start", lg: "center" }}
          >
            Top world’s brands trust us
          </Heading>
        </Box>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '50px', lg: '25px'}} justifyContent={"center"} alignItems='center' px={'30px'}>
              {
                  brands.map(brand => 
                    <Box maxW={{base: '130px', md: '100px', lg: '170px'}} key={brand.id}>
                        <Image w={"full"} src={brand.img}/>
                    </Box>
                    )
              }
        </Stack>
      </Box>
  );
}
