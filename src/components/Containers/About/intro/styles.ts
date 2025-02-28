import { styled } from '@/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },

  variants: {
    alignItems: {
      true: {
        alignItems: 'center'
      }
    }
  }
});

export const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' }
});

export const Section = styled('section', {
  marginTop: '0px',
  width: 'auto',
  'img': {
    width: '100%',
    height: 'auto'
  },
  '@bp2': { width: '48%' }
});
