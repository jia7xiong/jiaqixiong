import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      // dark: '#cfe7e1',
      dark: '#adbdb9',
      main: '#dfefeb',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffffff',
      dark: '#cac4c0',
      main: '#fdf7f3',
      contrastText: '#000',
    },
  },

  typography: {
    h4: {
      fontFamily: 'BodoniFLF',
      fontWeight: 'bold',
      fontSize: '2.35rem',
    },
    h6: {
      fontFamily: 'BodoniFLF',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Tiempo',
      fontSize: '1.1rem',
    },
    body2: {
      fontFamily: 'Plantin',
      fontSize: '0.9rem',
    },
    caption: {
      fontFamily: 'Open Sans',
    },
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: false,
  //     md: 840,
  //     lg: false,
  //     xl: 1920,
  //   }
  // }
});

export default theme;
