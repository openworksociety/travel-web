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
import ProfilePage from "./dashboard/Profile";
import EmployeesPage from "./dashboard/Employees";
import ExpensesPage from "./dashboard/Expenses";
import ReportsPage from "./dashboard/Reports";

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

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [profile, setProfile] = useState(false);
  const [employees, setEmployees] = useState(false);
  const [expense, setExpense] = useState(false);
  const [report, setReport] = useState(false);

  function showComponent(showProfile, showEmployees, showexpense, showreport) {
    setProfile(showProfile);
    setEmployees(showEmployees);
    setExpense(showexpense);
    setReport(showreport);
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
              showComponent(true, false, false, false);
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
              showComponent(false, true, false, false);
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
              showComponent(false, false, true, false);
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
              showComponent(false, false, false, true);
            }}
          >
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Report" />
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
      </main>
    </div>
  );
}

export default Dashboard;
