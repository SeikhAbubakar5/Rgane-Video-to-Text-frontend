import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import LogoutButton from "../Logout/Logout";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
        <Box>
          <LogoutButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
