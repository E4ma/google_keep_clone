import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SettingsProvider from './Components/Context/Settings/SettingsProvider';


ReactDOM.render(
  <SettingsProvider>
  <App />
</SettingsProvider>, 
  document.getElementById('root')
);