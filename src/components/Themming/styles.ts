import { styled } from '@/stitches.config';

export const ThemeButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  cursor: 'pointer',
  padding: '0.35rem',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' }
});
