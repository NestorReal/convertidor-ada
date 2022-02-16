import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#DD062B',
      dark: '#8c0018',
      white: '#fff'
    },
    secondary: {
      main: '#fff',
      contrastText: 'black'
    },
    error: {
      main: red.A400
    },
    gradient: {
      primary:
        'transparent linear-gradient(181deg, #176498 0%, #0095EC 100%) 0% 0% no-repeat padding-box'
    },
    background: {
      backgroundLoggin: '#DD062B',
      backgroundContent: 'white',
      backgroundHeader: '#E02232'
    }
  },
  typography: {
    fontFamily: 'Gotham !important',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  }
});

export default theme;
