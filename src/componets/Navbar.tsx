import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import React from "react";

interface Props {}

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap:10,
  justifyContent: "center",
  alignItems:"center"
}));

const Navbar: React.FC<Props> = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Quado Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." sx={{ width: "100%" }} />
        </Search>
        <Icons>
          <Badge badgeContent={2} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width: "30px", height: "30px", marginBottom:"10px"}} src="https://www.pngfind.com/pngs/m/4-48198_business-man-business-man-face-png-transparent-png.png" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
