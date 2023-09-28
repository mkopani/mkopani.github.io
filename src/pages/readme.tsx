import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BaseLayout from '@/components/BaseLayout';
import SectionButton from '@/components/SectionButton';
import TechStackCards from '@/components/TechStackCards';
import sitemap from '@/sitemap';

export default function Readme() {
  return (
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
          <Typography
            component="div"
            variant="title"
            sx={{ textAlign: 'center' }}
          >
            Mark Kopani
          </Typography>
          <Typography component="div" variant="h3" sx={{ textAlign: 'center' }}>
            Full Stack Generative AI Developer
          </Typography>
        </Stack>
        {/* Site options */}
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
          <SectionButton
            name="Click to View Full Portfolio"
            href=""
            prominent
          />
        </Stack>
      </Stack>
    </BaseLayout>
  );
}
