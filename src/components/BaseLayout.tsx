import { useEffect, useRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';

import Footer from './Footer';
import Navbar from './Navbar';

const BaseLayout = ({ children, display = 'flex', ...other }: BoxProps) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarHeight = useRef<number | string>(0);

  useEffect(() => {
    if (!navbarRef.current) {
      return;
    }

    navbarHeight.current = `${navbarRef.current.clientHeight}px`;
  }, []);

  return (
    <Box id="layout-container" display={display} {...other}>
      <Box>
        <Navbar ref={navbarRef} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1, pt: 10 }}>
        <Box height={`calc(100% - ${navbarHeight.current})`}>{children}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
