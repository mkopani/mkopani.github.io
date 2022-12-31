import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Image from 'next/image';

import BaseLayout from '@/components/BaseLayout';
import { BUTTON_COLOR } from '@/styles/theme';

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

type TechStackProps = {
  title: string;
  items: string[];
};

const stacks: TechStackProps[] = [
  {
    title: 'Client-side',
    items: [
      'React',
      'Next.js',
      'Web3.js',
      'Redux',
      'CSS/Sass',
      'Material UI',
      'Bootstrap',
    ],
  },
  {
    title: 'Server-side',
    items: [
      'Python',
      'Node.js',
      'Django',
      'NumPy & Pandas',
      'Ruby on Rails',
      'Rust',
      'Solidity',
    ],
  },
  {
    title: 'Utilities',
    items: [
      'AWS (Lambda, EC2, RDS, S3, etc.)',
      'Git',
      'PostgreSQL',
      'MongoDB',
      'Infura',
    ],
  },
];

export default function About() {
  const renderParagraphs = () => (
    <Stack
      spacing={2}
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        textAlign: 'justify',
      }}
    >
      <Paragraph>
        My name is Mark Kopani and I’m a full stack developer born, raised, and
        based out of Vancouver, BC. I have a diverse background that places me
        at the intersection of software, data, and finance. While graduating
        from UBC with a BSc in Statistics and completing the CFA Level I exam in
        2019, I started my own web development small business. I’ve built
        software solutions from the ground up for several small businesses and
        startups.
      </Paragraph>
      <Paragraph>
        In late 2021, I transitioned to Web3 development and joined{' '}
        <Link href="https://www.shapeimmersive.com/">Shape Immersive</Link> in
        the new year. Throughout my year at Shape, I’ve had the privilege of
        working on a variety of Web3 tools and SaaS products.
      </Paragraph>
      <Paragraph>
        In my spare time, I’ve been building an automated, algorithmic trading
        system with a Django REST Framework API and Next.js frontend. I’ve also
        worked on tools and packages for React and Python.
      </Paragraph>
      <Paragraph>
        Although my expertise is in React/Next.js and Python/Django, I’ve worked
        with many different languages and frameworks. No matter what the stack,
        I’m able to adjust in virtually no time.
      </Paragraph>
    </Stack>
  );

  const renderTechStack = () => (
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ width: '100%', mb: 2 }}
    >
      {stacks.map((stack, index) => (
        <TechStackSection key={index} {...stack} />
      ))}
    </Stack>
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
          src="/website_headshot.png"
          quality={100}
          fill
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
      {/* TODO: Add Head with metatags */}
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
            {renderTechStack()}
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  );
}

const Paragraph = (props: TypographyProps) => <Typography {...props} />;

const TechStackSection = ({ title, items }: TechStackProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: BUTTON_COLOR,
        width: { xs: '100%', sm: `${(1 / 3) * 100}%` },
        height: 'max-content',
      }}
    >
      <List sx={{ p: 0 }}>
        <ListItem sx={{ backgroundColor: BUTTON_COLOR }}>
          <ListItemText
            primary={title}
            primaryTypographyProps={{ fontWeight: 'bold' }}
          />
        </ListItem>
        {items.map((item, index, array) => (
          <ListItem
            key={index}
            sx={{
              // No vertical padding for all items except first and last
              pt: index > 0 ? 0 : undefined,
              pb: index < array.length - 1 ? 0 : undefined,
            }}
          >
            <ListItemText primary={`${item}`} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

TechStackSection.displayName = 'TechStackSection';
