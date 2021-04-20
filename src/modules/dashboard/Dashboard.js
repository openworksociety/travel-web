import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PeopleIcon from "@material-ui/icons/People";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import BarChartIcon from "@material-ui/icons/BarChart";
import ProfilePage from "./pages/Profile";
import EmployeesPage from "./pages/Employees";
import ExpensesPage from "./pages/Expenses";
import ReportsPage from "./pages/Reports";
import MasterdataPage from "./pages/Masterdata";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(8),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 200,
  },
  content: {
    // paddingLeft: theme.spacing(3),
    paddingLeft: 220,
  },
}));

const PROFILE_VIEW = "PROFILE";
const EMPLOYEES_VIEW = "EMPLOYEES";
const EXPENSES_VIEW = "EXPENSES";
const REPORTS_VIEW = "REPORTS";
const MASTERDATA_VIEW = "MASTERDATA";

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [expense, setExpense] = useState(false);
  const [report, setReport] = useState(false);
  const [masterdata, setMasterdata] = useState(false);

  function showHideView(selectedView) {
    switch (selectedView) {
      case PROFILE_VIEW:
        hideAllView();
        setProfile(true);
        break;
      case EMPLOYEES_VIEW:
        hideAllView();
        setEmployees(true);
        break;
      case EXPENSES_VIEW:
        hideAllView();
        setExpense(true);
        break;
      case REPORTS_VIEW:
        hideAllView();
        setReport(true);
        break;
      case MASTERDATA_VIEW:
        hideAllView();
        setMasterdata(true);
        break;
      default:
        break;
    }
  }

  function hideAllView() {
    setProfile(false);
    setEmployees(false);
    setExpense(false);
    setReport(false);
    setMasterdata(false);
  }

  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)} variant="permanent">
        <List disablePadding className={classes.drawer}>
          <Toolbar />
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              // showComponent(true, false, false, false);
              showHideView(PROFILE_VIEW);
            }}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              // showComponent(false, true, false, false);
              showHideView(EMPLOYEES_VIEW);
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Employees" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              // showComponent(false, false, true, false);
              showHideView(EXPENSES_VIEW);
            }}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              // showComponent(false, false, false, true);
              showHideView(REPORTS_VIEW);
            }}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              setOpen(false);
              // showComponent(false, false, false, true);
              showHideView(MASTERDATA_VIEW);
            }}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Masterdata" />
          </ListItem>
        </List>
      </Drawer>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <main className={classes.content}>
        {/* <Typography variant="h2">New ReactJs Features!</Typography> */}
        {profile && <ProfilePage />}
        {employees && <EmployeesPage />}
        {expense && <ExpensesPage />}
        {report && <ReportsPage />}
        {masterdata && <MasterdataPage />}
      </main>
    </div>
  );
}

export default Dashboard;
