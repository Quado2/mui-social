import { Box } from "@mui/material";
import * as React from "react";

interface RightbarProps {}

const Rightbar: React.FC<RightbarProps> = (props) => {
  return (
    <Box
      bgcolor={"brown"}
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      right bar
    </Box>
  );
};

export default Rightbar;
