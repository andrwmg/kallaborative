import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { unstable_createMuiStrictModeTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MainV2 from './components/MainV2';

const theme = unstable_createMuiStrictModeTheme({
  typography: {
    button: {
      textTransform: 'inherit',
      fontWeight: 600
    },
    h1: {
      fontWeight: 700,
      fontSize: ['24px', '!important'],
      fontFamily: ['Montserrat', '!important'],
      lineHeight:'37px',
    },
    h2: {
      fontWeight: 600,
      fontSize: ["18px", '!important'],
      fontFamily: ['Montserrat', '!important'],
      letterSpacing: 2.5
    },
    h3: {
      fontWeight: 600,
      fontSize: ["22px", '!important'],
      fontFamily: ['Montserrat', '!important'],
    },
    h4: {
      fontWeight: 700,
      fontSize: ["24px", '!important'],
      fontFamily: ['Montserrat', '!important'],

      // letterSpacing: '.1em',
      // textTransform: 'uppercase'
    },
    h5: {
      fontWeight: 600,
      fontSize: ["20px", '!important'],
      fontFamily: ['Montserrat', '!important'],
      // letterSpacing: '.1em',
      // textTransform: 'uppercase'
    },
    h6: {
      fontWeight: 500,
      fontSize: ["18px", '!important'],
      // letterSpacing: '.1em',
      // textTransform: 'uppercase'
    },
    body1: {
      fontWeight: 400,
      fontSize: ["18px", '!important'],
      lineHeight: '31px'
    },
    body2: {
      fontSize: ["14px", '!important']
    },
    p: {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '24px'

    },
    fontFamily: [
      'Hind',
      'sans-serif'
    ].join(',')
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <MainV2 />
    </div>
    </ThemeProvider>
  );
}

export default App;
