import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Fragment, useState } from "react";

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    zIndex: 1401,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  mobileMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
}));

function Navigation() {
  const classes = useStyles();
  const [mobileMenuAchorEl, setmobileMenuAchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAchorEl);

  const openMobileMenu = (event) => {
    setmobileMenuAchorEl(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setmobileMenuAchorEl(null);
  };
  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAchorEl}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem component={Link} to="/" onClick={closeMobileMenu}>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/dashboard" onClick={closeMobileMenu}>
        Dashboard
      </MenuItem>
      <MenuItem component={Link} to="/search" onClick={closeMobileMenu}>
        Search
      </MenuItem>
      <MenuItem component={Link} to="/about" onClick={closeMobileMenu}>
        About
      </MenuItem>
      <MenuItem component={Link} to="/contact" onClick={closeMobileMenu}>
        Contact
      </MenuItem>
      <MenuItem component={Link} to="/login" onClick={closeMobileMenu}>
        Login
      </MenuItem>
    </Menu>
  );
  return (
    <Fragment>
      <AppBar
        color="secondary"
        position="fixed"
        className={classes.appBarStyle}
      >
        {/* <AppBar position="static" color="secondary"> */}
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Travel Web
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
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
          </div>
          <IconButton
            color="inherit"
            onClick={openMobileMenu}
            className={classes.mobileMenu}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </Fragment>
  );
}

export default Navigation;
