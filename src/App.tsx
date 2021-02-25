import "./App.css";
import React from 'react'
import Navigation from "./modules/common/navigation/Navigation";
import { BrowserRouter, Route, Switch } from 'react-router-dom' ;
import { Container, makeStyles } from "@material-ui/core";
import Home from "./modules/home/Home";
import Login from "./modules/login/Login";
import Search from "./modules/search/Search";
import About from "./modules/about/About";
import Contact from "./modules/contact/Contact";
import Signup from "./modules/signup/Signup";
import AppBackground from "./resources/images/solo-traveller.jpg";
import classNames from "classnames";
import Dashboard from "./modules/dashboard/Dashboard";

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
      <Container className={rootClass} disableGutters>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
