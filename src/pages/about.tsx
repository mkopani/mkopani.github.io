import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/BaseLayout';
import ParagraphContainer from '@/components/ParagraphContainer';
import TechStackCards from '@/components/TechStackCards';
import { BUTTON_COLOR } from '@/styles/theme';

import { DEFAULT_TITLE } from './_app';

const TITLE = `About - ${DEFAULT_TITLE}`;

type LinkType = {
  href: string;
  name: string;
};

const links: LinkType[] = [
  { href: '/resume.pdf', name: 'Resume' },
  { href: 'mailto:mkopani+website@gmail.com', name: 'Email' },
  { href: 'https://github.com/mkopani', name: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mkopani/', name: 'LinkedIn' },
];

export default function About() {
  const renderParagraphs = () => (
    <ParagraphContainer>
      <Typography>
        My name is Mark Kopani and I’m a full stack developer born, raised, and
        living in Vancouver, BC. I have a diverse background that places me at
        the intersection of software, data, and finance. While graduating from
        UBC with a BSc in Statistics and completing the CFA Level I exam in
        2019, I started my own web development business. I’ve built software
        solutions from the ground up for several small businesses and startups.
      </Typography>
      <Typography>
        In late 2021, I transitioned to Web3 development and joined{' '}
        <Link href="https://www.shapeimmersive.com/">Shape Immersive</Link> in
        the new year. Throughout my time at Shape, I’ve had the privilege of
        working on a variety of Web3 tools and SaaS products.
      </Typography>
      <Typography>
        My journey in generative AI development began in early 2023 after
        experiencing the power of ChatGPT. This led me to building one of my
        favorite projects to date,{' '}
        <Link href="https://skybox.alphagen.co/">
          {"AlphaGen's Skybox Generator"}
        </Link>
        , with more exciting releases on the way.
      </Typography>
      <Typography>
        {
          "In my spare time, I've been building an automated, algorithmic trading system with a Django REST Framework API and Next.js frontend. I've also worked on tools and packages for React and Python."
        }
      </Typography>
      <Typography>
        {
          "Although my expertise is in React/Next.js and Django/FastAPI, I've worked with many different languages and frameworks, including Ruby on Rails. No matter what the stack, I'm able to adjust in virtually no time."
        }
      </Typography>
    </ParagraphContainer>
  );

  const renderPhotoAndLinks = () => (
    <Stack alignItems="center" width="100%">
      {/* Photo */}
      <Box
        component="div"
        sx={{
          width: '100%',
          height: '15em',
          position: 'relative',
          mb: 2,
          borderStyle: 'solid',
          borderWidth: 5,
          borderRadius: 3,
          borderColor: BUTTON_COLOR,
          overflow: 'hidden',
        }}
      >
        <Image
          alt="A picture of me on Long Beach in British Columbia."
          src="/images/headshot.jpeg"
          quality={100}
          fill
          priority
          style={{
            objectFit: 'cover',
            userSelect: 'none',
          }}
        />
      </Box>
      {/* Links */}
      <Stack
        spacing={1}
        direction={{ xs: 'column', sm: 'row', md: 'column', lg: 'row' }}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {links.map(({ href, name }, index, array) => (
          <Box key={index} width={{ xs: '100%', lg: `${100 / array.length}%` }}>
            <Button
              href={href}
              target="_blank"
              fullWidth
              sx={{
                backdropFilter: 'blur(8px)',
                backgroundBlendMode: 'overlay',
              }}
            >
              {name}
            </Button>
          </Box>
        ))}
      </Stack>
    </Stack>
  );

  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <NextSeo title={TITLE} />
      <BaseLayout>
        <Stack spacing={3} sx={{ alignItems: 'center', px: { xs: 2, lg: 0 } }}>
          <Stack alignItems="center" width="100%">
            <Typography variant="h1" component="div" gutterBottom>
              About Me
            </Typography>
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'center',
                width: { xs: '100%', sm: 'max-content' },
              }}
            >
              {renderPhotoAndLinks()}
            </Box>
          </Stack>
          <Stack spacing={3.5} direction={{ xs: 'column', md: 'row' }}>
            <Stack width={{ xs: '100%', md: '60%' }}>
              {renderParagraphs()}
            </Stack>
            <Box
              sx={{
                width: '40%',
                display: { xs: 'none', md: 'inherit' },
              }}
            >
              {renderPhotoAndLinks()}
            </Box>
          </Stack>
          <Stack width="100%">
            <Typography variant="h4" gutterBottom>
              Across the Stack
            </Typography>
            <TechStackCards />
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  );
}
