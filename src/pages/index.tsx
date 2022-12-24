import { alpha, Card, CardActionArea, CardContent, Container, Grid, GridProps } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Link from 'next/link';

import BaseLayout from '@/components/BaseLayout';
import { DARKEST_COLOR } from '@/styles/theme';

/* 
TODO: Opening page contains tiles (square or flat, horizontal rectangles)
*/

type SiteSection = {
  name: string;
  href: string;
};

const siteSections: SiteSection[] = [
  { name: 'Stack', href: '/stack' },
  { name: 'Projects', href: '/projects' },
  { name: 'GitHub', href: 'https://github.com/mkopani' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout
        sx={{
          minHeight: '100vh', // TODO: Change to calculated layoutHeight, create hook
          pt: 7,
          pb: 3, // TODO: Make simple footer
          px: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">

          <Stack spacing={3} display="flex" justifyContent="center" alignSelf="center">
            <Stack spacing={2} display="flex" justifyContent="center" mb={5}>
              <Typography
                component="div"
                variant="h1"
                sx={{ textTransform: 'uppercase', alignSelf: 'center' }}
              >
                Mark Kopani
              </Typography>
              <Typography
                component="div"
                variant="h3"
                sx={{ alignSelf: 'center' }}
              >
                Full Stack Web3 Developer
              </Typography>
            </Stack>
            <Grid container spacing={2} alignSelf="center">
              {/* Site options */}
              {siteSections.map((section, index) => (
                <GridItem key={index}>
                  <SectionCard name={section.name} href={section.href} />
                </GridItem>
              ))}
            </Grid>
          </Stack>
        </Container>
      </BaseLayout>
    </>
  );
}

const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} md={3} {...props} />
);

const SectionCard = ({ name, href }: { name: string; href: string }) => {
  const blurEffect = 'blur(8px)';

  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 3,
          height: '7.5em',
          backdropFilter: blurEffect,
          backgroundBlendMode: 'overlay',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardActionArea disableRipple disableTouchRipple>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 400 }}>
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
