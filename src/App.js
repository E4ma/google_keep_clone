import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import './App.css';
import Drawer from './Components/Drawer';
import SettingsContext from './Components/Context/Settings/SettingsContext';
import Header from './Components/Header';
import CreateNote from './Components/CreateNote';

const App = () => {

  return (
    <>
      <MuiThemeProvider>
        <CssBaseline />
        <Header />
        <CreateNote />
        <Drawer align="left" />
      </MuiThemeProvider>
    </>
  );
}

export default App;