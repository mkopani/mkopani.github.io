import { forwardRef, Ref } from 'react';
import MuiLink, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = forwardRef((_: unknown, ref: Ref<HTMLDivElement>) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      ref={ref}
      direction={isXs ? 'column' : 'row'}
      component="footer"
      sx={{
        width: '100vw',
        height: isXs ? '4.5em' : '5em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: isXs ? 2 : 3,
      }}
    >
      <Typography variant="body2">
        Designed and Built by Mark Kopani &copy; {new Date().getFullYear()}
      </Typography>
      <Separator />
      <Link href="https://github.com/mkopani">
        GitHub
      </Link>
      <Separator />
      <Link href="https://www.linkedin.com/in/mkopani/">
        LinkedIn
      </Link>
    </Stack>
  );
});

Footer.displayName = 'Footer';

export default Footer;

const Link = (props: LinkProps) => (
  <MuiLink underline="hover" variant="body2" {...props} />
);

const Separator = () => (
  <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'inherit' } }}>
    &nbsp;•&nbsp;
  </Typography>
);
