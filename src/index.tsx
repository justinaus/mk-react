import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { Modals } from './components/Modals';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: '2rem',
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <Modals />
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
