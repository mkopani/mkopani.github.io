import '@/styles/globals.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import theme from '@/styles/theme';

import type { AppProps } from 'next/app';

export const DEFAULT_TITLE = 'Mark Kopani | Full-Stack Web3 Developer';
export const SEO_IMAGES = [
  {
    url: '/images/seo_thumbnail.png',
    width: 3046,
    height: 1938,
    alt: DEFAULT_TITLE,
  },
];
export const SEO_TWITTER = {
  handle: '@markkopani',
  site: '@markkopani',
  cardType: 'summary_large_image',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{DEFAULT_TITLE}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo
        title={DEFAULT_TITLE}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://mkopani.github.io/',
          siteName: 'Mark Kopani',
          images: SEO_IMAGES,
        }}
        twitter={SEO_TWITTER}
      />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
