import "./App.css";
import NavigationRouter from "./router/NavigationRouter";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { AnimatePresence } from 'framer-motion';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <AnimatePresence exitBeforeEnter>  */}
        <NavigationRouter />
        {/* </AnimatePresence> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
