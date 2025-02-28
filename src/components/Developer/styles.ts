import { styled, keyframes } from '@/stitches.config';

const getKeyFrames = (
  one: string,
  two: string,
  tree: string,
  four: string,
  type: string
) => ({
  '0%': {
    transform: `${type}(${one})`
  },

  '25%': {
    transform: `${type}(${two})`
  },

  '75%': {
    transform: `${type}(${tree})`
  },

  '100%': {
    transform: `${type}(${four})`
  }
});

const frames = {
  all: keyframes({
    ...getKeyFrames('-10px', '0px', '0px', '-10px', 'translateY')
  }),
  eye: keyframes({
    ...getKeyFrames('-4px', '4px', '4px', '-4px', 'translateX')
  }),
  eyebrows: keyframes({
    ...getKeyFrames('-4px', '4px', '4px', '-4px', 'translateY')
  })
};

export const SvgContent = styled('span', {
  'svg': {
    width: '100%',
    height: '23rem',
    maxWidth: '25rem',
    fill: 'unset'
  },
  /* ----------------- COLORS DEV --------------------- */

  '.legs-fill': {
    fill: '$legs'
  },

  '.legsin-fill': {
    fill: '$legsin'
  },

  '.notebook-fill': {
    fill: '$notebook'
  },

  '.milogo-fill': {
    fill: '$milogo'
  },

  /* ----------------- ANIMATIONS DEV --------------------- */

  '.eye': {
    animation: `${frames.eye} 4s linear infinite`
  },

  '.eyebrows': {
    animation: `${frames.eyebrows} 6s linear infinite`
  },

  '.mouth': {
    animation: `${frames.all} 5s linear infinite`
  },

  '.all': {
    animation: `${frames.all} 6s linear infinite`
  }
});
