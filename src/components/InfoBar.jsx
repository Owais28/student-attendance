import {
  Box,
  Flex,
  Stack,
  Button,
  useColorModeValue,
  Text,
  Divider,
} from "@chakra-ui/react";

export const InfoBar = ({ students }) => {
  const date = new Date();

  return (
    <>
      <Box bg={useColorModeValue("white", "gray.900")} boxShadow="base">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack flex={1} pl={4}>
            <Text fontSize="small" fontWeight="semibold">
              Class
            </Text>
            <Text lineHeight={0.5} fontSize="smaller" color="teal.600">
              12<sup>th</sup> B
            </Text>
          </Stack>
          <Divider orientation="vertical" />
          <Stack flex={1} pl={4}>
            <Text fontSize="small" fontWeight="semibold">
              Subject
            </Text>
            <Text lineHeight={0.5} fontSize="smaller" color="teal.600">
              English
            </Text>
          </Stack>
          <Divider orientation="vertical" />
          <Stack flex={1} pl={4}>
            <Text fontSize="small" fontWeight="semibold">
              Date
            </Text>
            <Text lineHeight={0.5} fontSize="smaller" color="teal.600">
              {date.toLocaleDateString()}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};
