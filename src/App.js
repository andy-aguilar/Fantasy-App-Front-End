import React from "react"
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'
import Home from "./components/home/Home"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="App">
          <Home />
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
