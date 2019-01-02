import React from 'react';
import ReactDOM from 'react-dom';
import '../src/css/index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'));

