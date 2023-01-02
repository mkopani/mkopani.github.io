import { forwardRef, Ref } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Link from 'next/link';
import { useRouter } from 'next/router';

import sitemap, { HOME_PAGE } from '@/sitemap';
import { BUTTON_COLOR } from '@/styles/theme';

type NavbarProps = {
  backButton?: boolean;
};

const Navbar = forwardRef(
  ({ backButton = false }: NavbarProps, ref: Ref<HTMLDivElement>) => {
    const { pathname, back } = useRouter();
    const isHomePage = pathname === HOME_PAGE;

    return (
      <AppBar
        ref={ref}
        elevation={0}
        position="fixed"
        color="transparent"
        sx={{
          width: '100%',
          alignItems: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            py: {
              xs: 1,
              sm: 2,
            },
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Stack direction="row" spacing={1}>
                {backButton && (
                  <Tooltip
                    title="Go Back"
                    componentsProps={{
                      tooltip: {
                        sx: { background: BUTTON_COLOR },
                      },
                    }}
                  >
                    <a>
                      <IconButton onClick={back}>
                        <ArrowBackIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                )}
                <Link href="/" passHref>
                  <IconButton>
                    <HomeIcon />
                  </IconButton>
                </Link>
              </Stack>
            </div>
            <div>
              <Stack direction="row" spacing={2.5} flexGrow={1}>
                {Object.entries(sitemap).map(([route, name]) =>
                  !(isHomePage || route === pathname) ? (
                    <NavLink key={route} name={name} href={route} />
                  ) : null
                )}
              </Stack>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
);

Navbar.displayName = 'Navbar';

export default Navbar;

type NavLinkProps = {
  href: string;
  name: string;
};

const NavLink = ({ href, name }: NavLinkProps) => (
  <Link href={href} passHref style={{ textDecoration: 'none' }}>
    <Button variant="text">{name}</Button>
  </Link>
);

const IconButton = (props: IconButtonProps) => (
  <MuiIconButton sx={{ borderRadius: 1.5 }} {...props} />
);
