import Stack from '@mui/material/Stack';

const ParagraphContainer = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </Stack>
);

export default ParagraphContainer;
