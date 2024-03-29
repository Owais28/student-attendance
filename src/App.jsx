import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AppBar } from "./components/AppBar";
import { InfoBar } from "./components/InfoBar";
import { AddButton } from "./components/AddButton";
import { Feed } from "./components/Feed";
import { Box, useColorModeValue } from "@chakra-ui/react";

function App() {
  const [students, setStudents] = useState([]);

  const handleStudents = (newStudent) => {
    setStudents((students) => [...students, newStudent]);
  };

  const updateCheckOut = (roll_no, checkOut) => {
    setStudents((students) =>
      students.map((student) => {
        if (student.roll_no === roll_no) {
          return {
            ...student,
            checkOut: checkOut,
          };
        } else student;
      })
    );
  };
  return (
    <Box bg={useColorModeValue("gray.100")} height="100vh" maxH="100vh">
      <AppBar students={students} />
      <InfoBar />
      <Feed students={students} updateCheckOut={updateCheckOut} />
      <AddButton handleStudents={handleStudents} />
    </Box>
  );
}

export default App;
