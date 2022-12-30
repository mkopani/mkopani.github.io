import { forwardRef, Ref } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Zoom } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

import sitemap, { HOME_PAGE } from '@/sitemap';

const Navbar = forwardRef((_: unknown, ref: Ref<HTMLDivElement>) => {
  const { pathname } = useRouter();
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
        backdropFilter: isHomePage ? undefined : 'blur(8px)',
      }}
    >
      <Container sx={{ py: { xs: 1, sm: 2 } }} maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Zoom in={!isHomePage}>
              <Link href="/" passHref>
                <IconButton sx={{ borderRadius: 1.5 }}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Zoom>
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
});

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
