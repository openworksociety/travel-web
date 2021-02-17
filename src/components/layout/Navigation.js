import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <AppBar color="secondary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Travel App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
