import Link from 'next/link';
import { styled } from '@/stitches.config';

export const LogoContainer = styled('div', {
  maxWidth: '200px',
  height: '60px',
  display: 'flex',
  alignItems: 'center'
});

export const LogoButton = styled(Link, {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  color: 'white',
  cursor: 'pointer',
  padding: '0.25rem 0.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' },
  fontWeight: 700,
  textDecoration: 'none',
  marginLeft: '0.75rem',
  fontFamily: '$heading',
  'svg': {
    width: '100%',
    height: 'auto',
    maxWidth: '10rem',
    maxHeight: '2rem',
    fill: '$primary'
  },

  '@bp0': { marginLeft: '0' }
});
