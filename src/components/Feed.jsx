import { Box, List, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";
import { ListItem } from "./ListItem";

export const Feed = ({ students }) => {
  return (
    <Box p={5}>
      <Stack
        bg={useColorModeValue("white")}
        borderRadius="md"
        flex={1}
        height={"65vh"}
        maxH={"65vh"}
        overflow={"scroll"}
      >
        {students.length === 0 ? (
          <Text
            textAlign="center"
            color="gray"
            display={"flex"}
            mx="auto"
            my="auto"
            fontFamily="heading"
            fontSize="2xl"
          >
            No Student
          </Text>
        ) : (
          <List>
            {students.map((student) => (
              <ListItem
                name={student.name}
                checkIn={student.checkIn}
                roll_no={student.roll_no}
                checkOut={student.checkOut}
              />
            ))}
          </List>
        )}
      </Stack>
    </Box>
  );
};
