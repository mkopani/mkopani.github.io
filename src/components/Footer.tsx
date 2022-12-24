import { Fragment } from 'react';
import Box from '@mui/material/Box';

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
        <>&copy; Mark Kopani {new Date().getFullYear()}</>,
        'Github',
        'LinkedIn',
      ].map((item, index, array) => (
        <Fragment key={index}>
          {item}{index < array.length - 1 ? ' • ' : ''}
        </Fragment>
      ))}
    </Box>
  );
};

export default Footer;
