import { Head, Html, Main, NextScript } from 'next/document';

import { DARKEST_COLOR } from '@/styles/theme';

type CustomFontFamily = 'BebasNeue' | 'ChakraPetch' | 'HankenGrotesk';

type FontLinkProps = {
  fontFamily: CustomFontFamily;
  variant: string;
  extension?: 'woff2' | 'ttf';
};

const FontLink = ({
  fontFamily,
  variant,
  extension = 'woff2',
}: FontLinkProps) => (
  <link
    rel="preload"
    href={`/fonts/${fontFamily}/${fontFamily}-${variant}.${extension}`}
    as="font"
    type={`font/${extension}`}
    crossOrigin="anonymous"
  />
);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={DARKEST_COLOR} />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* TODO: Add favicon */}

        {/* Import Bebas Neue font */}
        <FontLink fontFamily="BebasNeue" variant="Regular" extension="ttf" />

        {/* Import Hanken Grotesk font */}
        <FontLink
          fontFamily="HankenGrotesk"
          variant="Regular"
          extension="ttf"
        />

        {/* Import Chakra Petch font */}
        <FontLink fontFamily="ChakraPetch" variant="Bold" extension="ttf" />
        <FontLink
          fontFamily="ChakraPetch"
          variant="BoldItalic"
          extension="ttf"
        />
        <FontLink fontFamily="ChakraPetch" variant="Italic" extension="ttf" />
        <FontLink fontFamily="ChakraPetch" variant="Light" extension="ttf" />
        <FontLink
          fontFamily="ChakraPetch"
          variant="LightItalic"
          extension="ttf"
        />
        <FontLink fontFamily="ChakraPetch" variant="Medium" extension="ttf" />
        <FontLink
          fontFamily="ChakraPetch"
          variant="MediumItalic"
          extension="ttf"
        />
        <FontLink fontFamily="ChakraPetch" variant="Regular" extension="ttf" />
        <FontLink fontFamily="ChakraPetch" variant="SemiBold" extension="ttf" />
        <FontLink
          fontFamily="ChakraPetch"
          variant="SemiBoldItalic"
          extension="ttf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
