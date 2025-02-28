import { styled } from '@/stitches.config';

export const GroupName = styled('div', {
  padding: '0.5rem 1rem',
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: '$command'
});

export const Kbd = styled('kbd', {
  background: 'rgba(255, 255, 255, .1)',
  color: '$secondary',
  padding: '0.25rem 0.5rem',
  textTransform: 'uppercase'
});

export const Shortcut = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '0.25rem'
});

export const StyledAction = styled('div', {
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center'
});

export const ActionRow = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

export const ResultStyle = styled('div', {
  padding: '0.75rem 1rem',
  background: '$command',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  cursor: 'pointer',
  color: '$secondary',

  '& svg': {
    width: '1.25rem',
    height: '1.25rem',
    position: 'relative',
    top: -2
  },

  variants: {
    active: {
      true: {
        color: '$primary',
        background: 'rgba(255, 255, 255, 0.1)'
      }
    }
  }
});
