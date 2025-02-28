import { KBarAnimator, KBarPositioner, KBarSearch } from 'kbar';
import { styled } from '@/stitches.config';

export const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 1rem 1rem',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box'
});

export const Search = styled(KBarSearch, {
  padding: '0.75rem 1rem',
  fontSize: '1rem',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: '$command',
  color: '$primary'
});

export const Animator = styled(KBarAnimator, {
  backgroundColor: '#1a1c1e',
  maxWidth: '600px',
  width: '100%',
  color: '$primary',
  borderRadius: '0.5rem',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    backgroundColor: '$command',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)'
  },

  '& > div > div::-webkit-scrollbar': {
    display: 'none'
  }
});
