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
      'React / Next.js',
      'Redux',
      'Material UI',
      'CSS, Sass',
      'Three.js / BabylonJS',
      'Web3.js',
    ],
  },
  {
    title: 'Server-side',
    items: [
      'Django, FastAPI, Flask',
      'Node.js / TypeScript',
      'LangChain / GPT API',
      'Stable Diffusion',
      'NumPy, Pandas',
      'Scikit-learn',
    ],
  },
  {
    title: 'Utilities',
    items: [
      'AWS',
      'Docker',
      'MongoDB',
      'MongoDB Atlas',
      'PostgreSQL',
      'Postman',
    ],
  },
];

const TechStackCards = () => (
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

export default TechStackCards;

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
