import { Box, Stack } from "@mui/material";
import React from "react";

import Feed from "./componets/Feed";
import Navbar from "./componets/Navbar";
import Rightbar from "./componets/Rightbar";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={1} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
