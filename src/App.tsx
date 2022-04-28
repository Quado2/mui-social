import { Box, Stack } from "@mui/material";
import React from "react";

import Feed from "./componets/Feed";
import Rightbar from "./componets/Rightbar";
import Sidebar from "./componets/Sidebar";

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;