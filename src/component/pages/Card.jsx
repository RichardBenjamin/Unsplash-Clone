import {
  Box,
  Center,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import {useNavigate}from "react-router-dom";
import { CircleIcon } from "./Circleicon";

export default function Statcard({props}) {
  const navigate=useNavigate();
  const handleclick=()=>{
     navigate("/login",{replace:true})
  }

  return (
    <Center py={6}>
      <Box
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={10}>
          <List spacing={3}>
            <Flex justifyContent={"space-between"}>
              <ListItem>Status</ListItem>{" "}
              <Button>
                <CircleIcon boxSize={4} color="green.500" />
                open
              </Button>
            </Flex>
            <Box border={"1px solid grey"}></Box>
            <Flex justifyContent={"space-between"}>
              <ListItem>Curator</ListItem>
              <Button>
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://img.icons8.com/ios-filled/2x/unsplash.png"
                  alt="logo"
                />
              </Button>
            </Flex>
            <Box border={"1px solid grey"}></Box>
            <Flex justifyContent={"space-between"}>
              <ListItem>Contribution</ListItem>
              <Button>4.2k</Button>
            </Flex>
            <Box border={"1px solid grey"}></Box>
            <Flex justifyContent={"space-between"}>
              <ListItem>Top contributors</ListItem>
              <Flex>
                <Image
                  borderRadius={"8px"}
                  src="https://images.unsplash.com/profile-1602499837447-54090944da0bimage?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff"
                />{" "}
                <Image
                  borderRadius={"5px"}
                  src="https://images.unsplash.com/profile-1495427732560-fe5248ad6638?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff"
                />{" "}
                <Image
                  borderRadius={"8px"}
                  src="https://images.unsplash.com/profile-1547459104692-5b9ce4d8e152?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff"
                />{" "}
                <Image
                  borderRadius={"8px"}
                  src="https://images.unsplash.com/profile-1641662541726-527734cb4708image?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff"
                />{" "}
                <Image
                  borderRadius={"8px"}
                  src="https://images.unsplash.com/profile-1648284806245-917d58e93dce?dpr=1&auto=format&fit=crop&w=16&h=16&q=60&crop=faces&bg=fff"
                />
              </Flex>
            </Flex>
            <Box border={"1px solid grey"}></Box>
          </List>

          <Button
            mt={10}
            w={"full"}
            bg={"black"}
            color={"white"}
            rounded={"xl"}
            onClick={handleclick}
            boxShadow={"0 5px 20px 0px rgb(72 187 120 / 43%)"}
            _hover={{
              bg: "grey.300",
            }}
            _focus={{
              bg: "black.500",
            }}
          >
            {props}
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
