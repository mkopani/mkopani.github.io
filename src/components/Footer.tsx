import { Fragment } from 'react';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { default as NextLink, LinkProps } from 'next/link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        py: 3,
      }}
    >
      {[
        <Fragment key="copyright">
          &copy; Mark Kopani {new Date().getFullYear()}
        </Fragment>,
        <Link key="github" href="https://github.com/mkopani">
          Github
        </Link>,
        <Link key="linkedin" href="https://www.linkedin.com/in/mkopani/">
          LinkedIn
        </Link>,
      ].map((item, index, array) => (
        <Fragment key={index}>
          {item}
          {index < array.length - 1 && <>&nbsp;•&nbsp;</>}
        </Fragment>
      ))}
    </Box>
  );
};

export default Footer;

const Link = ({
  children,
  href,
  ...other
}: LinkProps & { children: React.ReactNode }) => (
  <NextLink {...other} href={href} passHref>
    <MuiLink underline="hover">{children}</MuiLink>
  </NextLink>
);
