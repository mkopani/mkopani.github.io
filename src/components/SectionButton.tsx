import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { makeOpaqueWhite } from '@/styles/theme';

export type SectionButtonProps = {
  name: string;
  href: string;
  prominent?: boolean;
};

const SectionButton = ({
  name,
  href,
  prominent = false,
}: SectionButtonProps) => (
  <Link href={href} passHref style={{ textDecoration: 'none' }}>
    <Card
      sx={{
        backgroundColor: makeOpaqueWhite(0.025),
        borderRadius: 3,
        width: '100%',
        backdropFilter: 'blur(8px)',
        backgroundBlendMode: 'overlay',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <CardActionArea disableRipple disableTouchRipple>
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              px: prominent ? 5 : undefined,
            }}
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>
);

export default SectionButton;
