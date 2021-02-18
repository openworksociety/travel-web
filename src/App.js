import "./App.css";
import { React } from "react";
import Navigation from "./components/layout/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Search from "./components/pages/Search";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Signup from "./components/pages/Signup";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[300],
    paddingTop: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container className={classes.root}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
