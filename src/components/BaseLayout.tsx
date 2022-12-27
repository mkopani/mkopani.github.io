import { useRef } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Container from '@mui/material/Container';

import useWindowSize from '@/hooks/useWindowSize';

import Footer from './Footer';
import Navbar from './Navbar';

const BaseLayout = ({
  children,
  display = 'flex',
  noTopPadding = false,
  ...other
}: BoxProps & { noTopPadding?: boolean }) => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarHeight = navbarRef.current?.clientHeight || 0;
  const { height: windowHeight = 1000 } = useWindowSize();

  const layoutHeight = windowHeight - navbarHeight;

  return (
    <Box
      id="layout-container"
      display={display}
      minHeight={windowHeight}
      {...other}
    >
      <Box>
        <Navbar ref={navbarRef} />
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box
          minHeight={layoutHeight}
          maxHeight="100vh"
          pt={noTopPadding ? undefined : `${navbarHeight}px`}
          sx={{ justifyContent: 'center' }}
        >
          <Container maxWidth="lg">
            {children}
          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default BaseLayout;
