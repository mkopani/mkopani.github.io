import { forwardRef, Ref } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = forwardRef((_: unknown, ref: Ref<HTMLDivElement>) => {
  return (
    <Box
      ref={ref}
      component="footer"
      sx={{
        width: '100vw',
        height: { xs: '3em', sm: '5em' },
        display: 'flex',
        justifyContent: 'center',
        py: { xs: 2, sm: 3 },
      }}
    >
      <Typography variant="body2">
        Designed and Built by Mark Kopani &copy; {new Date().getFullYear()}
      </Typography>
    </Box>
  );
});

Footer.displayName = 'Footer';

export default Footer;
