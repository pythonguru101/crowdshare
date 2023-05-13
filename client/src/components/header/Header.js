import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  // Typography,
  Button,
  // useScrollTrigger,
  // Slide,
  Box,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import logo from "../../assets/logo/cs-logo-color.svg";
import logo2 from "../../assets/logo/Asset1.png";
// import logo3 from "../../assets/logo/Asset2.png";
import logo4 from "../../assets/logo/logo.png";
// import MenuIcon from "@mui/icons-material/Menu";
import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    textAlign: "right",
    justifyContent: "space-between",
    alignItems: "right",
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(20),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      marginLeft: -5,
      justifyContent: "start",
      flexGrow: 0,
      // display:"none"
    },
    [theme.breakpoints.only("md")]: {
      marginRight: theme.spacing(5),
      justifyContent: "center",
    },
    [theme.breakpoints.only("lg")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.only("xl")]: {
      justifyContent: "center",
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    // textAlign: "center",
    justifyContent: "center",
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  logo: {
    width: "auto",
    height: "48px",
    marginRight: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
      height: "25px",
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    letterSpacing: "-0.5px",
  },
  // link: {
  //   textDecoration: "none",
  //   color: "inherit",
  //   border: "2px solid red",
  //   marginLeft: theme.spacing(2),
  //   [theme.breakpoints.down("sm")]: {
  //     marginLeft: theme.spacing(0),
  //   },
  // },
  linkName: {
    fontFamily: "Sofia-Pro-SemiBold",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  },
}));

// function HideOnScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({ target: window ? window() : undefined });
//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }

function Header(props) {
  const classes = useStyles();
  const [navBackground, setNavBackground] = useState("transparent");
  const [buttonColor, setButtonColor] = useState("#000");
  const [menuColor, setMenuColor] = useState("#fff");
  const matches = useMediaQuery("(max-width:700px)");
  // console.log(matches);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      setNavBackground("#fff");
      setButtonColor("#000");
      setMenuColor("#000");
    } else {
      setNavBackground("transparent");
      setButtonColor("#000");
      setMenuColor("#fff");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    // <HideOnScroll {...props}>
    <AppBar position="fixed" style={{ backgroundColor: navBackground }}>
      <Toolbar>
        <Box className={classes.logoContainer}>
          <img
            src={menuColor === "#000" ? logo2 : logo4}
            alt="CrowdShare logo"
            className={classes.logo}
          />
          <Menu
            styles={{
              color: matches ? "#000" : menuColor,
              backgroundColor: "transparent",
            }}
          />
        </Box>
        <Box className={classes.root}>
          <Button
            style={{ color: buttonColor }}
            component={Link}
            to="/"
            className={classes.link}
          >
            <p className={classes.linkName}>Home</p>
          </Button>
          <Button
            style={{ color: buttonColor }}
            component={Link}
            to="/"
            className={classes.link}
          >
            <p className={classes.linkName}>About</p>
          </Button>
          <Button
            style={{ color: buttonColor }}
            component={Link}
            to="/"
            className={classes.link}
          >
            <p className={classes.linkName}>Sign Up</p>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    // </HideOnScroll>
  );
}

export default Header;
