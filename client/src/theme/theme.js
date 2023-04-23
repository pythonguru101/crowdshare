import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Change this to your primary color
      blue: "#1b14b8",
      orange: "#bf5808",
      purple: "#9f55ff",
      yellow: "#FEBF12",
      newBlue: "#4F76A6",
      deepBlue: "#11147b",
    },
    secondary: {
      main: "#f50057", // Change this to your secondary color
      blue: "#362FD9",
      orange: "#f16a25",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Acme"',
      '"Poppins"',
    ].join(","),
    fontSize: 16, // Change this to your default font size
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    titleFont: "",
  },
  spacing: 8, // Change this to your default spacing value
  // breakpoints: {
  //   values: {
  //     xs: 0, // for phones
  //     sm: 600, // for tablets
  //     md: 960, // for small laptops
  //     lg: 1280, // for desktops
  //     xl: 1920, // for large screens
  //   },
  // },
});

export default theme;
