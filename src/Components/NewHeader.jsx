import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


import { FormControlLabel } from "@material-ui/core";
import SideBar from "./SideBar";
import DarkModeSwitch from "./DarkModeSwitch/DarkModeSwitch";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const NewHeader = ({ parentMethod }) => {
  console.log(useStyles)
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <SideBar />
          </Typography>
          <FormControlLabel
            control={<DarkModeSwitch parentMethod={parentMethod} />}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NewHeader;
