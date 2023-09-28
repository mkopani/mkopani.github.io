import { forwardRef, Ref } from 'react';
import Box from '@mui/material/Box';
import Fade, { FadeProps } from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { TransitionProps } from '@mui/material/transitions';
import Typography from '@mui/material/Typography';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/BaseLayout';
import SectionButton from '@/components/SectionButton';
import TechStackCards from '@/components/TechStackCards';
import sitemap from '@/sitemap';

import { DEFAULT_TITLE, SEO_IMAGES, SEO_TWITTER } from './_app';

type AnimationComponent = 'title' | 'subtitle' | 'menu' | 'stack';

type AnimationSpecObject = {
  [key in AnimationComponent]: number;
};

const animationDelays: AnimationSpecObject = {
  title: 0,
  subtitle: 300,
  menu: 500,
  stack: 700,
};

const animationDurations: AnimationSpecObject = {
  title: 750,
  subtitle: 600,
  menu: 500,
  stack: 1000,
};

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
      <NextSeo
        title={DEFAULT_TITLE}
        openGraph={{
          title: DEFAULT_TITLE,
          images: SEO_IMAGES,
        }}
        twitter={SEO_TWITTER}
      />
      <BaseLayout
        ContainerSx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Stack spacing={{ xs: 3, sm: 5.5 }}>
          {/* Hero section */}
          <Stack
            spacing={1}
            sx={{
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
            <CustomSlideTransition component="subtitle">
              <Typography
                component="div"
                variant="h3"
                sx={{ textAlign: 'center' }}
              >
                Full Stack Generative AI Developer
              </Typography>
            </CustomSlideTransition>
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
                  <SectionButton name={name} href={route} />
                </Box>
              ))}
            </Stack>
          </Fade>
          <Fade {...makeTransitionProps('stack')}>
            <Stack width="100%">
              <TechStackCards />
            </Stack>
          </Fade>
        </Stack>
      </BaseLayout>
    </>
  );
}

const CustomFade = forwardRef((props: FadeProps, ref: Ref<HTMLDivElement>) => (
  <div ref={ref}>
    <Fade {...props} />
  </div>
));

CustomFade.displayName = 'CustomFade';

const CustomSlideTransition = ({
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
