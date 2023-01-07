import React from "react";
import {
  ListItem as LI,
  Avatar,
  Text,
  useColorModeValue,
  Stack,
  Box,
  Flex,
} from "@chakra-ui/react";
export const ListItem = ({ name, roll_no, checkIn, checkOut, ...props }) => {
  return (
    <LI
      px={3}
      py={3}
      borderBottomWidth={1}
      borderBottomColor={useColorModeValue("gray.100")}
      display="flex"
      alignItems="center"
      height={"max-content"}
      justifyContent="space-between"
    >
      <Box display={"flex"}>
        <Avatar size={"sm"} mr={2} />
        <Flex gap={0} direction={"column"}>
          <Text fontSize={"16px"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={"13px"} color={useColorModeValue("gray")}>
            Roll No : {roll_no}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Text fontSize={"13px"} color={useColorModeValue("gray.7")}>
          {checkIn} - {checkOut}
        </Text>
      </Box>
    </LI>
  );
};
