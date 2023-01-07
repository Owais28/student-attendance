import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function AppBar({ students }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("teal.800", "teal.700")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Text color="white" fontWeight="bold" fontSize="large">
            Attendance
          </Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box>
                <Text color={useColorModeValue("white")}>
                  Present : <strong>{students.length}</strong>
                </Text>
              </Box>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
