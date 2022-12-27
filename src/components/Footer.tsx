import Box from '@mui/material/Box';
import MuiLink, { LinkProps } from '@mui/material/Link';
import { default as NextLink } from 'next/link';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        height: '5em',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        py: 3,
      }}
    >
      <>&copy; Mark Kopani {new Date().getFullYear()}</>
      <Separator />
      <Link href="https://github.com/mkopani">Github</Link>
      <Separator />
      <Link href="https://www.linkedin.com/in/mkopani/">LinkedIn</Link>
    </Box>
  );
};

export default Footer;

const Link = ({
  children,
  href,
  ...other
}: LinkProps & { children: React.ReactNode }) => (
  <MuiLink underline="hover" href={href} component={NextLink} {...other}>
    {children}
  </MuiLink>
);

const Separator = () => <>&nbsp;•&nbsp;</>;
