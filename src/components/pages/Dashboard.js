import React, { useState } from "react";
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

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
    paddingLeft: theme.spacing(3),
  },
}));

function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <CssBaseline />
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List disablePadding className={classes.drawer}>
          <Toolbar />
          <ListItem button>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Employees" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Expenses" />
          </ListItem>
          <ListItem button>
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
        <Typography variant="h2">New ReactJs Features!</Typography>
      </main>
    </div>
  );
}

export default Dashboard;
