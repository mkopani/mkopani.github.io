import { deepOrange, lightBlue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes, Shadows } from '@mui/material/styles';

export const primaryGradient =
  'background-image: linear-gradient(to bottom, #002949, #033961, #054a79, #085c93, #086ead, #3972bd, #5d74cb, #8175d4, #bb5dbd, #e24093, #f1335c, #e64a19)';

export const LIGHTEST_COLOR = lightBlue[50];

// Define gradient colors
export const ACCENT_COLOR = '#E64A19';
export const MIDDLE_COLOR = '#0288D1'
export const DARKEST_COLOR = '#002949';

let theme = createTheme({
  // Disable shadows throughout the app
  shadows: Array(25).fill('none') as Shadows,

  palette: {
    mode: 'dark',
    primary: {
      main: LIGHTEST_COLOR,
    },
    secondary: {
      main: deepOrange[100],
    },
    background: {
      default: primaryGradient,
    },
    text: {
      primary: LIGHTEST_COLOR,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'large',
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'unset',
        },
      },
    },
  },

  typography: {
    fontFamily: 'ChakraPetch',
  },
});

theme = createTheme(theme, {
  typography: {
    h1: {
      fontSize: 150,
      fontFamily: 'BebasNeue',
      lineHeight: 1,
      textTransform: 'uppercase',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 130,
      },
    },
    h2: {
      fontFamily: 'ChakraPetch',
      color: theme.palette.text.primary,
    },
    h3: {
      fontFamily: 'ChakraPetch',
      color: theme.palette.text.primary,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
