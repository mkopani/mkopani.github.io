import { Fragment } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/BaseLayout';
import { BUTTON_COLOR, BUTTON_HOVER_COLOR } from '@/styles/theme';

import { DEFAULT_TITLE } from './_app';

const TITLE = `Projects | ${DEFAULT_TITLE}`;

const gridSpacing = { xs: 1.5, md: 2 };

type ProjectProps = {
  name: string;
  image: string;
  url: string;
  affiliation?: string;
  description: string;
};

const projects: ProjectProps[] = [
  {
    name: 'Weebox',
    image: '/projects/weebox.png',
    url: 'https://weebox.io',
    affiliation: 'Shape Immersive',
    description: "A public release page for a client's NFT collection.",
  },
  {
    name: 'Format As You Type',
    url: 'https://github.com/mkopani/format-as-you-type',
    image: '/projects/format-as-you-type.png',
    description:
      'React input field formatter for any input component.',
  },
  {
    name: 'Bayshore Easy Drive',
    url: 'https://bayshoreeasydrive.com/',
    image: '/projects/bayshore.png',
    description: 'Lightweight rental car reservation system and CRM.',
  },
  {
    name: 'Pine Python Package',
    url: 'https://pypi.org/project/pppine/',
    image: '/projects/pppine.png',
    description: 'Miscellaneous Python and Django helper functions.',
  },
];

export default function Projects() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
      </Head>
      <NextSeo title={TITLE} />
      <BaseLayout>
        <Stack
          spacing={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="div" variant="h1">
            Projects
          </Typography>
          <Grid
            container
            spacing={gridSpacing}
            sx={{
              pb: gridSpacing,
              pr: gridSpacing,
              mt: gridSpacing,
              ml: 'auto',
              mr: 'auto',
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard {...project} key={index} />
            ))}
          </Grid>
          <Box></Box>
        </Stack>
      </BaseLayout>
    </>
  );
}

const ProjectCard = ({
  name,
  image = '',
  affiliation = '',
  url = '#',
  description,
}: ProjectProps) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          backgroundColor: BUTTON_COLOR,
          transition: '0.3s',
          '&:hover': {
            backgroundColor: BUTTON_HOVER_COLOR,
          },
        }}
      >
        <CardActionArea href={url} target="_blank">
          <CardContent sx={{ p: 'unset' }}>
            {image && (
              <CardMedia
                image={image}
                component="img"
                height="200"
                sx={{ backgroundPosition: 'center' }}
              />
            )}
            <Box sx={{ p: 1 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Typography variant="h5" fontWeight={600}>
                  {name}
                </Typography>
                {affiliation && <Typography>(via {affiliation})</Typography>}
              </Stack>
              <Typography variant="body2">{description}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
