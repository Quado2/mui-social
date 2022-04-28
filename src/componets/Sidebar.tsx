import { Box } from "@mui/material";
import * as React from "react";

interface ISidebarProps {}

const Sidebar: React.FunctionComponent<ISidebarProps> = (props) => {
  return (
    <Box
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
      bgcolor={"skyblue"}
      flex={1}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
