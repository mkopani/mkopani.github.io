import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { BUTTON_COLOR } from '@/styles/theme';

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

const TechStackDisplay = () => (
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

export default TechStackDisplay;

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
