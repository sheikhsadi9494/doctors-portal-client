import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const Navigation = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            portal
          </Typography>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/appointment"
          >
            <Button color="inherit">appointment</Button>
          </Link>
          {user?.email && (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/dashbord"
            >
              <Button color="inherit">Dashbord</Button>
            </Link>
          )}
          {user?.email ? (
            <Button onClick={handleLogOut} color="inherit">
              LogOUt
            </Button>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
