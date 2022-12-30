import { deepOrange, lightBlue } from '@mui/material/colors';
import {
  createTheme,
  responsiveFontSizes,
  Shadows,
} from '@mui/material/styles';

// #002949, #0288D1, #E64A19
export const primaryGradient =
  'linear-gradient(to bottom, #002949, #033961, #054a79, #085c93, #086ead, #3972bd, #5d74cb, #8175d4, #bb5dbd, #e24093, #f1335c, #e64a19)';

// #002949, #01579B, #E64A19
export const darkerGradient =
  'linear-gradient(to bottom, #002949, #003158, #003a67, #004276, #004b86, #304e93, #514f9e, #714ea4, #a73d96, #cf2978, #e52a4f, #e64a19)';

// #002949, #01579B, #7B1FA2
export const darkestGradient =
  'linear-gradient(to bottom, #002949, #003158, #003a67, #004276, #004b86, #064d90, #134f9a, #2151a4, #384aa8, #4f41a9, #6534a7, #7b1fa2)';

// Define gradient colors
export const ACCENT_COLOR = '#E64A19';
export const MIDDLE_COLOR = '#0288D1'
export const DARKEST_COLOR = '#002949';

// Define misc colors
export const makeOpaqueWhite = (opacity: number) => {
  return `rgba(255, 255, 255, ${opacity})`;
};
export const BUTTON_COLOR = makeOpaqueWhite(0.1);
export const BUTTON_HOVER_COLOR = makeOpaqueWhite(0.3);

let theme = createTheme({
  // Disable shadows throughout the app
  shadows: Array(25).fill('none') as Shadows,

  palette: {
    mode: 'dark',
    primary: {
      main: lightBlue[50],
    },
    secondary: {
      main: deepOrange[100],
    },
    background: {
      default: darkerGradient,
    },
    text: {
      primary: makeOpaqueWhite(0.85),
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
          backgroundColor: BUTTON_COLOR,
          color: 'white',
          '&:hover': {
            backgroundColor: BUTTON_HOVER_COLOR,
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
        fontSize: 100,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
