import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  FormLabel,
  DrawerOverlay,
  useDisclosure,
  Input,
  DrawerContent,
  DrawerCloseButton,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export const AddButton = ({ handleStudents }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [student, setStudent] = useState({});
  const addStudent = () => {
    if (
      student?.name !== undefined &&
      student?.roll_no !== undefined &&
      student?.checkIn !== undefined &&
      student?.checkOut !== undefined
    ) {
      handleStudents(student);
      onClose();
      // setStudent({});
    } else {
      console.log("Please add all information.");
    }
  };
  return (
    <Box px={5}>
      <Button
        width={"100%"}
        variant={"solid"}
        colorScheme={"teal"}
        onClick={onOpen}
      >
        Add Student
      </Button>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" fontWeight={"bold"}>
            Add Attendance
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  value={student?.name}
                  onChange={(e) =>
                    setStudent((student) => ({
                      ...student,
                      name: e.target.value,
                    }))
                  }
                  placeholder="Please enter student name"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="rollno">Roll No</FormLabel>
                <Input
                  type="number"
                  value={student?.roll_no}
                  onChange={(e) =>
                    setStudent((student) => ({
                      ...student,
                      roll_no: e.target.value,
                    }))
                  }
                  id="rollno"
                  placeholder="Please enter student roll no"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="checkin">Checkin time</FormLabel>
                <InputGroup>
                  <Input
                    type="time"
                    value={student?.checkIn}
                    onChange={(e) =>
                      setStudent((student) => ({
                        ...student,
                        checkIn: e.target.value,
                      }))
                    }
                    id="checkin"
                    placeholder="Please enter domain"
                  />
                </InputGroup>
              </Box>
              <Box>
                <FormLabel htmlFor="checkout">Checkout time</FormLabel>
                <InputGroup>
                  <Input
                    type="time"
                    value={student?.checkOut}
                    onChange={(e) =>
                      setStudent((student) => ({
                        ...student,
                        checkOut: e.target.value,
                      }))
                    }
                    id="checkout"
                    placeholder="Please enter domain"
                  />
                </InputGroup>
              </Box>
              {/* <Box>
                <FormLabel htmlFor="status">Status</FormLabel>
                <Select id="status" defaultValue="absent">
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                </Select>
              </Box> */}
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={(e) => addStudent()}>
              Add
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
