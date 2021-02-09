import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      // dark: '#adbdb9',
      dark: '#cfe7e1',
      main: '#dfefeb',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffffff',
      dark: '#c9bdb6',
      main: '#fcefe8',
      // main: '#fdf7f3',
      contrastText: '#000',
    },
  },

  typography: {
    h4: {
      fontFamily: 'BodoniFLF',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: 'BodoniFLF',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Amaranth',
    },
    body2: {
      fontFamily: 'Open Sans',
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: false,
      md: 840,
      lg: false,
      xl: 1920,
    }
  }
});

export default theme;
