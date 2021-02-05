import { createMuiTheme } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      dark: '#adbdb9',
      main: '#dfefeb',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffffff',
      dark: '#c9bdb6',
      main: '#fcefe8',
      contrastText: '#000',
    },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: '#fff',
    // },
  },
});

export default theme;
