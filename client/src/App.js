import './App.css';
import NavigationRouter from './router/NavigationRouter';
import { ThemeProvider} from '@mui/material'
import theme from './theme/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavigationRouter/>
      </ThemeProvider>
    </div>
  );
}

export default App;
