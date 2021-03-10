import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import defaultTheme from './themes/default';
import darkTheme from './themes/dark';
import './App.css';
import Drawer from './components/Drawer';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import SettingsContext from './context/Settings/SettingsContext';


const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
  },
  paper: {
    width: 350,
    height: 400,
  },
});


const App = ({ classes }) => {
  const context = useContext(SettingsContext);
  const theme = context.darkMode ? darkTheme : defaultTheme;


  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <CreateNote />
        <Drawer align="left" />
      </MuiThemeProvider>
    </>
  );
}

export default App;