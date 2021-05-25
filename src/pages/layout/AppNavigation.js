import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../../service/Authentication.service";

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    zIndex: theme.zIndex.drawer + 1,
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

function AppNavigation(props) {
  const classes = useStyles();
  //const history = useHistory();
  const [mobileMenuAchorEl, setmobileMenuAchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAchorEl);

  const user = AuthService.getCurrentUser();

  const openMobileMenu = (event) => {
    setmobileMenuAchorEl(event.currentTarget);
  };
  const closeMobileMenu = () => {
    setmobileMenuAchorEl(null);
  };
  const onLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
    // history.push("/");
    // window.location.reload();
  };
  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuAchorEl}
      id="mobile-menu"
      keepMounted
      open={isMobileMenuOpen}
    >
      <MenuItem component={Link} to="/home" onClick={closeMobileMenu}>
        Home
      </MenuItem>
      <MenuItem component={Link} to="/booking" onClick={closeMobileMenu}>
        Booking
      </MenuItem>
      <MenuItem component={Link} to="/agency" onClick={closeMobileMenu}>
        Agency
      </MenuItem>
      <MenuItem component={Link} to="/account" onClick={closeMobileMenu}>
        Account
      </MenuItem>
      <MenuItem component={Link} to="/employee" onClick={closeMobileMenu}>
        Employee
      </MenuItem>
      <MenuItem component={Link} to="/businfo" onClick={closeMobileMenu}>
        Bus Info
      </MenuItem>
      <MenuItem component={Link} to="/about" onClick={closeMobileMenu}>
        About
      </MenuItem>
      <MenuItem component={Link} to="/" onClick={closeMobileMenu}>
        Logout
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
        <Toolbar variant="dense">
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Travel Business
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/booking">
              Booking
            </Button>
            <Button color="inherit" component={Link} to="/agency">
              Agency
            </Button>
            <Button color="inherit" component={Link} to="/account">
              Account
            </Button>
            <Button color="inherit" component={Link} to="/employee">
              Employee
            </Button>
            <Button color="inherit" component={Link} to="/businfo">
              Bus Info
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/" onClick={onLogout}>
              Logout
            </Button>
          </div>
          {user && (
            <IconButton
              color="inherit"
              onClick={openMobileMenu}
              className={classes.mobileMenu}
            >
              <MoreIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {user && mobileMenu}
    </Fragment>
  );
}

export default AppNavigation;
