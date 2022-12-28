import { useRef } from 'react';
import { SxProps } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import useWindowSize from '@/hooks/useWindowSize';

import Footer from './Footer';
import Navbar from './Navbar';

const BaseLayout = ({
  children,
  noTopPadding = false,
  ContainerSx = {},
}: {
  children: React.ReactNode;
  noTopPadding?: boolean;
  ContainerSx?: SxProps;
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerHeight = footerRef.current?.clientHeight || 0;
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarHeight = navbarRef.current?.clientHeight || 0;
  const { height: windowHeight = 1000 } = useWindowSize();

  const layoutHeight = windowHeight - footerHeight;

  return (
    <>
      <Navbar ref={navbarRef} />
      <Stack
        direction="column"
        sx={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <Container
          maxWidth="lg"
          sx={{
            pt: noTopPadding ? undefined : `${navbarHeight}px`,
            minHeight: layoutHeight,
            ...ContainerSx,
          }}
        >
          <main>{children}</main>
        </Container>
        <Footer ref={footerRef} />
      </Stack>
    </>
  );
};

export default BaseLayout;
