import { Box, PaletteMode, Stack } from "@mui/material";
import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";



import Feed from "./componets/Feed";
import Navbar from "./componets/Navbar";
import Rightbar from "./componets/Rightbar";
import Sidebar from "./componets/Sidebar";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: { 
      mode: mode as PaletteMode
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor="background.default" color="text.primary" >
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
