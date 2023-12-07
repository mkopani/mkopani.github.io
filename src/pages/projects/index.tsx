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

import { DEFAULT_TITLE } from '../_app';

const TITLE = `Projects - ${DEFAULT_TITLE}`;

const gridSpacing = { xs: 1.5, md: 2 };

interface Project {
  name: string;
  url?: string;
  affiliation?: string;
  description: string;
}

interface ProjectProps extends Project {
  id: string;
}

const projects: { [key: string]: Project } = {
  datastars: {
    name: 'Data Stars',
    url: 'https://datastars.ai/',
    description: 'Conversational AI for brands and teams.',
  },
  skybox: {
    name: 'Alphagen Skybox',
    url: 'https://skybox.alphagen.co/',
    affiliation: 'Shape Immersive',
    description: 'Gen. AI skybox creation for Unreal, Unity, and Blender.',
  },
  weebox: {
    name: 'Weebox',
    url: 'https://weebox.io',
    affiliation: 'Shape Immersive',
    description: "A public release page for a client's NFT collection.",
  },
  safer: {
    name: 'Safer',
    affiliation: 'Answer Intelligence',
    description: 'Web3 wallet prototype focused on UX and security.',
  },
  arc: {
    name: 'Arc',
    affiliation: 'Shape Immersive',
    description: 'A white-label NFT store and marketplace.',
  },
  f3stival: {
    name: 'F3STIVAL',
    affiliation: 'Shape Immersive',
    description: 'Bulk ERC-1155 minting and Node bulk transfer script.',
  },
  'format-as-you-type': {
    name: 'Format As You Type',
    url: 'https://github.com/mkopani/format-as-you-type',
    description: 'React input field formatter for any input component.',
  },
  bayshore: {
    name: 'Bayshore Easy Drive',
    url: 'https://bayshoreeasydrive.com/',
    description: 'Lightweight rental car reservation system and CRM.',
  },
  pppine: {
    name: 'Pine Python Package',
    url: 'https://pypi.org/project/pppine/',
    description: 'Miscellaneous Python and Django helper functions.',
  },
};

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
            {Object.entries(projects).map(([id, project], index) => (
              <ProjectCard id={id} {...project} key={index} />
            ))}
          </Grid>
        </Stack>
      </BaseLayout>
    </>
  );
}

const ProjectCard = ({
  id,
  name,
  affiliation,
  url,
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
        <CardActionArea
          href={url || `/projects/${id}`}
          target={url ? '_blank' : undefined}
        >
          <CardContent sx={{ p: 'unset' }}>
            <CardMedia
              image={`/images/projects/${id}.png`}
              component="img"
              height="200"
              sx={{ backgroundPosition: 'center' }}
            />
            <Box sx={{ p: 1 }}>
              <Stack
                direction="row"
                spacing={1}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <Typography variant="h5" fontWeight={600}>
                  {name}
                </Typography>
                {affiliation && <Typography>({affiliation})</Typography>}
              </Stack>
              <Typography variant="body2">{description}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
