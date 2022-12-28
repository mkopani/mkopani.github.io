import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography, { TypographyProps } from '@mui/material/Typography';

import BaseLayout from '@/components/BaseLayout';

type LinkType = {
  href: string;
  name: string;
};

const links: LinkType[] = [
  { href: '/', name: 'Resume' }, // TODO
  { href: 'mailto:mkopani+website@gmail.com', name: 'Email' },
  { href: 'https://github.com/mkopani', name: 'GitHub' },
  { href: 'https://www.linkedin.com/in/mkopani/', name: 'LinkedIn' },
];

export default function About() {
  const renderParagraphs = () => (
    <Stack
      spacing={2}
      sx={{
        width: { xs: '100%', md: '50%' },
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
      sx={{
        width: { xs: '100%', md: '50%' },
        mb: 2,
      }}
    >
      <TechStackSection
        title="Client-side"
        items={[
          'React',
          'Next.js',
          'Web3.js',
          'Redux',
          'CSS/Sass',
          'Material UI',
          'Bootstrap',
        ]}
      />
      <TechStackSection
        title="Server-side"
        items={[
          'Python',
          'Node.js',
          'Django',
          'NumPy & Pandas',
          'Ruby on Rails',
          'Rust',
          'Solidity',
        ]}
      />
      <TechStackSection
        title="Utilities"
        items={[
          'AWS (Lambda, EC2, RDS, S3, etc.)',
          'Git',
          'PostgreSQL',
          'MongoDB',
          'Infura',
        ]}
      />
    </Stack>
  );

  return (
    <>
      {/* TODO: Add Head with metatags */}
      <BaseLayout>
        <Stack spacing={5} sx={{ alignItems: 'center', px: { xs: 2, lg: 0 } }}>
          <Stack alignItems="center">
            <Typography variant="h1" component="div" gutterBottom>
              About Me
            </Typography>
            {/* Links */}
            <Stack spacing={1} direction="row">
              {links.map(({ href, name }, index, array) => (
                <Box
                  key={index}
                  width={{ xs: '100%', sm: `${100 / array.length}%` }}
                >
                  <Button
                    href={href}
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
          <Stack spacing={3.5} direction={{ xs: 'column', md: 'row' }}>
            {renderParagraphs()}
            {renderTechStack()}
          </Stack>
        </Stack>
      </BaseLayout>
    </>
  );
}

const Paragraph = (props: TypographyProps) => <Typography {...props} />;

const TechStackSection = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: { xs: '100%', sm: `${(1 / 3) * 100}%` },
        height: 'max-content',
      }}
    >
      <List sx={{ p: 0 }}>
        <ListItem sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
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
