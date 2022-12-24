import '@/styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';

import theme from '@/styles/theme';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mark Kopani | Full-Stack Web3 Developer</title>

        {/* TODO: Add SEO metadata */}
        {/* TODO: Install fonts */}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
