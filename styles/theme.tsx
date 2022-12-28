import { deepOrange, lightBlue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes, Shadows } from '@mui/material/styles';

export const primaryGradient =
  'linear-gradient(to bottom, #002949, #033961, #054a79, #085c93, #086ead, #3972bd, #5d74cb, #8175d4, #bb5dbd, #e24093, #f1335c, #e64a19)';
export const darkerGradient =
  'linear-gradient(to bottom, #002949, #003158, #003a67, #004276, #004b86, #304e93, #514f9e, #714ea4, #a73d96, #cf2978, #e52a4f, #e64a19)';

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
      default: darkerGradient,
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.85)',
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
          textTransform: 'unset',
        },
        contained: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
          '&:hover': {
            // color: DARKEST_COLOR,
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
          },
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
    root: {
      color: theme.palette.text.primary,
    },
    title: {
      fontSize: 150,
      fontFamily: 'BebasNeue',
      lineHeight: 1,
      textTransform: 'uppercase',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 130,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
