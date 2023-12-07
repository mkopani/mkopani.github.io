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
        My name is Mark Kopani, a full stack developer from Vancouver, BC. Born
        and raised here, I have a diverse background at the intersection of
        software, data, and finance. Graduating from UBC with a BSc in
        Statistics, and having completed the CFA Level I exam in 2019, I
        uniquely blend analytical and financial insights into my work, when
        applicable. While graduating, I started my own web development business
        and built software solutions from the ground up for several small
        businesses and startups.
      </Typography>
      <Typography>
        In a pivotal career move in late 2021, I delved into Web3 development.
        This led me to join{' '}
        <Link href="https://www.shapeimmersive.com/">Shape Immersive</Link> in
        the following year, where {"I've"} been instrumental in developing
        various Web3 tools and SaaS products.
      </Typography>
      <Typography>
        My journey in generative AI development began in early 2023, deeply
        influenced by the transformative capabilities of ChatGPT. This newfound
        inspiration led to the creation of one of my favorite projects to date,{' '}
        <Link href="https://skybox.alphagen.co/">
          {"AlphaGen's Skybox Generator"}
        </Link>
        . Building on this momentum, I soon began a contract with{' '}
        <Link href="https://datastars.ai/">Data Stars</Link>, a Vancouver-based
        AI startup, furthering my exploration and impact in the field of
        artificial intelligence.
      </Typography>
      <Typography>
        Outside work hours, I have immersed myself in building an automated,
        algorithmic trading system over the last three years, employing a Django
        REST Framework API and Next.js frontend. My passion extends to
        developing utilities for React and Python and any small mini-projects
        that come to mind.
      </Typography>
      <Typography>
        While I specialize in React/Next.js and Django/FastAPI, my experience
        spans various languages and frameworks, including Ruby on Rails. My
        adaptability is one of my key strengths, allowing me to thrive in
        diverse tech stacks.
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
