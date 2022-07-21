import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Bangladesh Doctors Consulation
          </Typography>
          {user?.email ? (
            <Box>
              <Button onClick={logout} color="inherit">
              Logout
            </Button>
            <NavLink to="/dashboard" style={{ textDecoration: "none", color:"white" }}>
              <Button color="inherit" variant="text">
                Dashboard
              </Button>
            </NavLink>
            </Box>
            
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none", color:"white" }}>
              <Button color="inherit" variant="text">
                Login
              </Button>
            </NavLink>
          )}
          <h6>{user.displayName}</h6>
          <Link to="/appoinment" style={{ textDecoration: "none" , color:"white" }}>
            <Button color="inherit">Apppoinment</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
