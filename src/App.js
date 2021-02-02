import logo from "./logo.svg";
import "./App.css";
import { React } from "react";
import { Button } from "@material-ui/core";
import ButtonAppBar from "./components/ButtonAppBar";
import TemporaryDrawer from "./components/TemporaryDrawer";
import PersistentDrawerLeft from "./components/PersistentDrawerLeft";

function App() {
  return (
    <div>
      {/* <ButtonAppBar /> */}
      {/* <TemporaryDrawer /> */}
      <PersistentDrawerLeft />
    </div>
  );
}

export default App;
