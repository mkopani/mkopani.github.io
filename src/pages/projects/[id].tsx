import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import BaseLayout from '@/components/BaseLayout';
import ParagraphContainer from '@/components/ParagraphContainer';

import { DEFAULT_TITLE } from '../_app';

type ProjectDisplayProps = {
  name: string;
  description: string | string[];
  affiliation?: string;
  screenshots?: string[];
  stack: string | string[];
};

const Subtitle = (props: TypographyProps) => (
  <Typography variant="h6" {...props} />
);

const ProjectDisplay: NextPage<ProjectDisplayProps> = ({
  name,
  description,
  affiliation,
  screenshots,
  stack,
}) => {
  const title = `${name} - ${DEFAULT_TITLE}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo title={title} />
      <BaseLayout>
        <Stack spacing={3}>
          <Stack>
            <Typography variant="h2" gutterBottom>
              {name}
            </Typography>
            {affiliation && (
              <Subtitle>
                <b>Affiliation</b>: {affiliation}
              </Subtitle>
            )}
            <Subtitle>
              <b>Stack</b>:{' '}
              {[...(Array.isArray(stack) ? stack : [stack])].join(', ')}
            </Subtitle>
          </Stack>
          <ParagraphContainer>
            {Array.isArray(description)
              ? description.map((paragraph, index) => (
                  <Typography key={index}>{paragraph}</Typography>
                ))
              : description}
          </ParagraphContainer>
          {/* TODO: Screenshots */}
        </Stack>
      </BaseLayout>
    </>
  );
};

export default ProjectDisplay;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  if (!id || Array.isArray(id)) {
    return { notFound: true };
  }

  const project = projects?.[id];
  if (!project) {
    return { notFound: true };
  }

  return {
    props: project,
  };
};

const projects: { [key: string]: ProjectDisplayProps } = {
  arc: {
    name: 'Arc',
    description: [
      "Arc is a white-label NFT store and marketplace catered to a single creator's needs and preferences. Rather than releasing an NFT collection on a public marketplace such as OpenSea, Rarible, etc., Arc can provide a special environment for creators and artists to host a memorable drop. Arc also offers a secondary marketplace for users to buy, sell, and exchange NFTs purchased from the same creator.",
      'Building Arc involved implementing two key features: Web3 wallet integration and advanced theme customization.',
    ],
    affiliation: 'Shape Immersive',
    screenshots: [], // TODO
    stack: ['Next.js', 'MongoDB', 'AWS Lambda'],
  },
  safer: {
    name: 'Safer',
    description: [
      "Safer is a Web3 wallet prototype that prioritizes ease-of-use and user security. In order to put together a quick proof-of-concept, I forked MetaMask's browser extension, familiarized myself with the codebase, and began tweaking the user interface and adding new features.",
      'By modifying the existing Sass code, as well as implementing brand new components using Material UI, I was able to create a more intuitive user experience for real, fully-functional MetaMask wallets.',
      "One of the prominent features added is multi-factor authentication (MFA). Since Python is envisioned to be a part of the eventual stack, I implemented an API using Django REST Framework. This allowed me to cleanly integrate Twilio’s SMS verification service while making minimal changes to MetaMask's codebase.",
    ],
    affiliation: 'Answer Intelligence',
    screenshots: [], // TODO
    stack: ['React', 'Django REST Framework'],
  },
  f3stival: {
    name: 'F3STIVAL Bulk Mint & Transfer',
    description: [
      'F3STIVAL is a conference that was hosted by F3 Ventures at Emily Carr University in Vancouver, BC on July 8-9, 2022. The conference’s mission was to introduce as many women to Web3 as possible. Activities included wallet setup and education on cryptocurrency, NFTs and blockchain technology as a whole.',
      'Shape was given the opportunity to mint about 900 ERC-1155 Polygon NFTs and distribute them to festival-goers after creating their wallets. Once minting the NFTs, I wrote a Node.js script that uses an Infura provider to execute the transfers.',
      "The node script receives a CSV file of the conference attendees' wallet addresses and uses multithreading to batch transfers and reduce total runtime."
    ],
    affiliation: 'Shape Immersive',
    stack: ['Node.js', 'Infura'],
  },
  'floor-trader': {
    name: 'FloorTrader',
    description: [
      'FloorTrader is an API wrapper for Interactive Brokers. It was originally built as part of an automated, algorithmic trading system that I have been building in my spare time over the two years.',
      'I plan to release this tool to the public before Q3 2023.'
    ],
    stack: 'Django REST Framework',
  },
};
