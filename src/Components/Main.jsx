import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import NewHeader from "./NewHeader";
import InfoIcon from "./InfoIcon";
import Home from "./Home";
import { connect } from "react-redux";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Commerce from "./Commerce";

const themeObject = {
  palette: {
    primary: {
      main: "#001eb7"
    },
    secondary: { main: "#0087f5" },
    type: "light"
  }
};

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);

  const {
    palette: { type }
  } = theme;

  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light"
      }
    };
    setTheme(updatedTheme);
  };
  return [theme, toggleDarkMode];
};

const useStyles = makeStyles({
  drawer: {
    justifyContent: "flex-start",
    display: "flex",
    bottom: "0%",
    position: "fixed"
  }
});

const Main = props => {
  const { DISPLAY } = props;
  const [theme, toggleDarkMode] = useDarkMode();
  const [whatToShow, setWhatToShow] = useState(<Home />);
  const themeConfig = createMuiTheme(theme);
  const classes = useStyles();
  console.log(themeConfig.palette.background.paper);

  useEffect(() => {
    switch (DISPLAY) {
      case "Frontend":
        setWhatToShow(<Frontend />);
        break;
      case "Backend":
        setWhatToShow(<Backend />);
        break;
      case "Commerce":
        setWhatToShow(<Commerce />);
        break;
      default:
        setWhatToShow(<Home />);
    }
  }, [DISPLAY]);

  return (
    <ThemeProvider theme={themeConfig}>
      <div
        style={{
          backgroundColor: themeConfig.palette.background.paper,
          minHeight: '100vh',
          zIndex: 2
        }}
      >
        <NewHeader parentMethod={toggleDarkMode} />
        <div style={{ height: 30 }} />
        <Container>
          <div>{whatToShow}</div>
        </Container>
      </div>
      <div className={classes.drawer}>
        <InfoIcon />
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    setDISPLAY: state.DISPLAY,
    theme: state.THEME
  };
};

export default connect(mapStateToProps)(Main);
