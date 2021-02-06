import { createMuiTheme } from '@material-ui/core/styles';

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
  },
  // typography: {
  //   
  // },
});

export default theme;
