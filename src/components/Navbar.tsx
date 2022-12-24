import { forwardRef, Ref } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { Zoom } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Avatar from "@mui/material/Avatar";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import { useRouter } from "next/router";

import { DARKEST_COLOR } from "@/styles/theme";

const Navbar = forwardRef((_: unknown, ref: Ref<HTMLDivElement>) => {
  const { pathname } = useRouter();

  return (
    <AppBar
      ref={ref}
      elevation={0}
      position="fixed"
      sx={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent',
        zIndex: 1000,
      }}
    >
      <Container sx={{ py: 2 }} maxWidth="xl">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            {/* <Zoom in={pathname !== '/'}> */}
            <Zoom in>
              <Link href="/" passHref>
                <IconButton sx={{ borderRadius: 0 }}>
                  <HomeIcon />
                </IconButton>
              </Link>
            </Zoom>
          </div>
          <div>
            <Stack direction="row" spacing={2.5} flexGrow={1}>
              <NavLink name="Work Experience" href="/experience" />
              <NavLink name="Notable Projects" href="/projects" />
              <NavLink name="GitHub" href="https://github.com/mkopani" />
              <NavLink name="Contact" href="/contact" />
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
    <Button variant="text">
      {name}
    </Button>
  </Link>
);

const Logo = () => (
  <Avatar sx={{ width: 56, height: 56, backgroundColor: DARKEST_COLOR }}>
    <Typography variant="h4">MK</Typography>
  </Avatar>
);
