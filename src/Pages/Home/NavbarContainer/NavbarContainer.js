import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import useFirebase from "../../../Components/hooks/useFirebase";
import { useScrollTrigger } from "@mui/material";
const NavbarContainer = () => {
  const { user, LogOut } = useFirebase();
  return (
    <Box sx={{ flexGrow: 1, pb: "15px" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              {" "}
              News
            </Link>
          </Typography>
          {!user.email ? (
            <Box>
              <Link
                to="/items"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit">Explore</Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit">Register</Button>
              </Link>
            </Box>
          ) : (
            <Box>
              <Link
                to="/items"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit">Explore</Button>
              </Link>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button color="inherit">Dash Board</Button>
              </Link>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  padding: "5px 5px 7px 5px",
                  borderRadius: "7px",
                  backgroundColor: "#EA2027",
                }}
              >
                <Button color="inherit" onClick={LogOut}>
                  Sign Out
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarContainer;
