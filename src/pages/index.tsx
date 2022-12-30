import { forwardRef, Ref } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Fade, { FadeProps } from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Link from 'next/link';

import BaseLayout from '@/components/BaseLayout';
import useWindowSize from '@/hooks/useWindowSize';
import sitemap from '@/sitemap';
import { makeOpaqueWhite } from '@/styles/theme';

type AnimationComponent = 'title' | 'subtitle' | 'menu';

type AnimationSpecObject = {
  [key in AnimationComponent]: number;
}

const animationDelays: AnimationSpecObject = {
  title: 0,
  subtitle: 300,
  menu: 500,
};

const animationDurations: AnimationSpecObject = {
  title: 750,
  subtitle: 600,
  menu: 500,
}

const makeTransitionProps = (
  key: keyof typeof animationDelays
): TransitionProps => ({
  in: true,
  style: { transitionDelay: `${animationDelays[key]}ms` },
  timeout: animationDurations[key],
});

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <BaseLayout
        noTopPadding
        ContainerSx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Stack spacing={{ xs: 1.5, sm: 3 }}>
          {/* Hero section */}
          <Stack
            spacing={1}
            sx={{
              mb: { xs: 2, sm: 5 },
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Grow {...makeTransitionProps('title')}>
              <Typography
                component="div"
                variant="title"
                sx={{ textAlign: 'center' }}
              >
                Mark Kopani
              </Typography>
            </Grow>
            <CustomSlide component="subtitle">
              <Typography
                component="div"
                variant="h3"
                sx={{ textAlign: 'center' }}
              >
                Full Stack Web3 Developer
              </Typography>
            </CustomSlide>
          </Stack>
          {/* Site options */}
          <Fade {...makeTransitionProps('menu')}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: { xs: '100%', md: '65%' },
              }}
            >
              {Object.entries(sitemap).map(([route, name]) => (
                <Box key={route} width="100%">
                  <SectionCard name={name} href={route} />
                </Box>
              ))}
            </Stack>
          </Fade>
        </Stack>
      </BaseLayout>
    </>
  );
}

const SectionCard = ({ name, href }: { name: string; href: string }) => (
  <Link href={href} passHref style={{ textDecoration: 'none' }}>
    <Card
      sx={{
        backgroundColor: makeOpaqueWhite(0.025),
        borderRadius: 3, // TODO: Change to 0
        width: '100%',
        backdropFilter: 'blur(8px)',
        backgroundBlendMode: 'overlay',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.05)'
        },
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
          <Typography variant="h5" sx={{ fontWeight: 400 }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

const CustomFade = forwardRef(
  (props: FadeProps, ref: Ref<HTMLDivElement>) => (
    <div ref={ref}>
      <Fade {...props} />
    </div>
  )
);

CustomFade.displayName = 'CustomFade';

const CustomSlide = ({
  component,
  children,
}: {
  component: AnimationComponent;
  children: React.ReactElement;
}) => (
  <Slide direction="up" {...makeTransitionProps(component)}>
    <CustomFade {...makeTransitionProps(component)}>{children}</CustomFade>
  </Slide>
);
