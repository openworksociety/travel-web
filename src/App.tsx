import "./App.css";
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { Container, makeStyles } from "@material-ui/core";
import AppBackground from "./resources/images/solo-traveller.jpg";
import classNames from "classnames";
import AppNavigation from "./pages/layout/AppNavigation";
import HomeView from "./pages/modules/home/HomeView";
import BookingView from "./pages/modules/booking/BookingView";
import AgencyView from "./pages/modules/agency/AgencyView";
import AccountView from "./pages/modules/account/AccountView";
import EmployeeView from "./pages/modules/employee/EmployeeView";
import BusInfoView from "./pages/modules/businfo/BusInfoView";
import AboutView from "./pages/modules/other/AboutView";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    // paddingTop: theme.spacing(5),
    //instead of this we can use disableGutters to container + AppBar {position="static"}
    overflowX: "auto",
  },
  bgImage: {
    backgroundImage: `url(${AppBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

function App() {
  const classes = useStyles();
  const rootClass = classNames(classes.root, classes.bgImage);
  return (
    <BrowserRouter>
      {/* <Container className={rootClass}> */}
      <AppNavigation/>
      <Container disableGutters> 
        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route exact path="/booking" component={BookingView}></Route>
          <Route exact path="/agency" component={AgencyView}></Route>
          <Route exact path="/account" component={AccountView}></Route>
          <Route exact path="/employee" component={EmployeeView}></Route>
          <Route exact path="/businfo" component={BusInfoView}></Route>
          <Route exact path="/about" component={AboutView}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
