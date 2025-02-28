import { motion } from 'framer-motion';
import { styled } from '@/stitches.config';

export const Hover = styled(motion.span, {
  position: 'absolute',
  inset: 0,
  background: '$hover',
  borderRadius: '$borderRadius',
  zIndex: -1
});

export const Project = styled(motion.a, {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  transition: 'opacity $duration ease-in-out',
  border: '0',
  borderRadius: '$borderRadius',
  textDecoration: 'none',
  width: 'auto',
  padding: '1.25rem',
  '&:hover': { opacity: 1 },
  '@bp2': { width: 180, maxWidth: '8.75rem' },
  '& svg': {
    size: '1.5rem',
    margin: '0 auto 0.75rem 0',
    fill: '$primary'
  },
  'svg path': {
    fill: '$primary'
  }
});

export const Body = styled('div', {
  flex: '1 1 auto'
});

export const Title = styled('p', {
  color: '$primary',
  margin: '0',
  fontSize: '18px'
});

export const Description = styled('p', {
  margin: '0',
  color: '$secondary',
  lineHeight: '24px'
});

export const LinkContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  minHeight: '35px',
  marginTop: '10px'
});

export const Link = styled('a', {
  border: 'none',
  transition: 'all 0.3s ease-out',
  '@bp6': {
    opacity: '0',
    pointerEvents: 'none',
    visibility: 'hidden'
  },

  variants: {
    show: {
      true: {
        '@bp6': {
          opacity: '1',
          pointerEvents: 'auto',
          visibility: 'visible'
        }
      }
    }
  }
});
