import { useRef } from 'react';
import { SxProps, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import useWindowSize from '@/hooks/useWindowSize';

import Footer from './Footer';
import Navbar from './Navbar';

export type BaseLayoutProps = {
  children: React.ReactNode;
  noTopPadding?: boolean;
  backButton?: boolean;
  title?: React.ReactNode;
  ContainerSx?: SxProps;
};

const BaseLayout = ({
  children,
  noTopPadding = false,
  backButton = false,
  title,
  ContainerSx = {},
}: BaseLayoutProps) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const footerHeight = footerRef.current?.clientHeight || 0;
  const navbarRef = useRef<HTMLDivElement>(null);
  const navbarHeight = navbarRef.current?.clientHeight || 0;
  const { height: windowHeight = 1000 } = useWindowSize();

  const layoutHeight = windowHeight - footerHeight;

  return (
    <>
      <Navbar backButton={backButton} ref={navbarRef} />
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
          <main>
            {title ? (
              <>
                <Stack
                  spacing={5}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography component="div" variant="h1">
                    {title}
                  </Typography>
                  {children}
                </Stack>
              </>
            ) : (
              children
            )}
          </main>
        </Container>
        <Footer ref={footerRef} />
      </Stack>
    </>
  );
};

export default BaseLayout;
