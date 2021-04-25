import React from "react";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import EmployeeDashboard from "./views/EmployeeDashboard";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: 50, // this is to move content area downside
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginTop: 40, // this is to move menu icon button downside
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    marginTop: 40, // this is to move tab content downside
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  tabsroot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function EmployeeView() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={1}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="end"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
                <Typography>Menu</Typography>
              </IconButton>
            </div>
            <Divider />
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabsroot}
            >
              <Tab label="Dashboard" {...a11yProps(0)} />
              <Tab label="Page2" {...a11yProps(1)} />
              <Tab label="Page3" {...a11yProps(2)} />
              <Tab label="Page4" {...a11yProps(3)} />
              <Tab label="Page5" {...a11yProps(4)} />
              <Tab label="Page6" {...a11yProps(5)} />
              <Tab label="Page7" {...a11yProps(6)} />
            </Tabs>
          </Drawer>
        </Grid>
        <Grid item xs={11}>
          <div
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <TabPanel value={value} index={0} spacing={2}>
              <EmployeeDashboard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Page 2
            </TabPanel>
            <TabPanel value={value} index={2}>
              Page 3
            </TabPanel>
            <TabPanel value={value} index={3}>
              Page 4
            </TabPanel>
            <TabPanel value={value} index={4}>
              page 5
            </TabPanel>
            <TabPanel value={value} index={5}>
              Page 6
            </TabPanel>
            <TabPanel value={value} index={6}>
              Page 7
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default EmployeeView;
