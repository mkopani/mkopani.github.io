import { forwardRef, Ref } from 'react';
import Box from '@mui/material/Box';

const Footer = forwardRef((_: unknown, ref: Ref<HTMLDivElement>) => {
  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        width: '100vw',
        height: '5em',
        display: 'flex',
        justifyContent: 'center',
        py: 3,
      }}
    >
      <>Designed and Built by Mark Kopani &copy; {new Date().getFullYear()}</>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;
