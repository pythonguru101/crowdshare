import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Change this to your primary color
    },
    secondary: {
      main: '#f50057', // Change this to your secondary color
    },
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif', // Change this to your default font family
    fontSize: 16, // Change this to your default font size
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  spacing: 8, // Change this to your default spacing value
});

export default theme;
