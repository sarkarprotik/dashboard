import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import { connect } from "react-redux";
import * as actionTypes from "../Redux/actions";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const SideBar = props => {
  // console.log('this is props', props)
  const { setDISPLAY } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const ListData = [
    { name: "Home", icon: HomeIcon },
    { name: "Frontend", icon: GrainIcon },
    { name: "Backend", icon: GraphicEqIcon },
    { name: "Commerce", icon: DevicesOtherIcon }
  ];

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {ListData.map((data, index) => (
          <ListItem
            button
            key={data.name}
            onClick={() => {
              setDISPLAY(data.name);
              // console.log(data.name,'clicked...............>>>>>', DISPLAY)
            }}
          >
            <ListItemIcon>
              <data.icon />
            </ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuOpenRoundedIcon style={{ color: "white" }} />
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    DISPLAY: state.DISPLAY
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDISPLAY: value =>
      dispatch({ type: actionTypes.SET_DISPLAY, DISPLAY: value })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
