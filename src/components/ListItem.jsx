import React, { useRef, useState } from "react";
import {
  ListItem as LI,
  Avatar,
  Text,
  useColorModeValue,
  Stack,
  Box,
  Flex,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
  DrawerOverlay,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
export const ListItem = ({
  name,
  roll_no,
  checkIn,
  checkOut,
  handleCheckOut,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [checkOutNew, setCheckOutNew] = useState("");

  const checkOutRef = useRef();

  return (
    <LI
      onClick={onOpen}
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
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontWeight={"bold"}>
            Update Checkout
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="checkout">Checkout</FormLabel>
                <Input
                  type="time"
                  id="checkout"
                  ref={checkOutRef}
                  value={checkOutNew}
                  onChange={(e) => setCheckOutNew(e.target.value)}
                  placeholder="Please enter checkout to update"
                />
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="teal"
              onClick={(e) => {
                handleCheckOut(roll_no, checkOutNew);
                onClose();
                checkOutRef.current.value = "";
                setCheckOutNew("");
              }}
            >
              Update
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </LI>
  );
};
