import { styled, keyframes } from '@/stitches.config';

export const ButtonText = styled('span', {
  display: 'block',
  marginLeft: '0.3em',
  transition: 'all 0.3s ease-in-out'
});

const sendFly = keyframes({
  'from': {
    transform: 'translateY(0.1em)'
  },
  'to': {
    transform: 'translateY(-0.1em)'
  }
});

export const ButtonWrapper = styled('div', {});

export const ButtonIconSvg = styled('svg', {
  display: 'block',
  transformOrigin: 'center center',
  transition: 'transform 0.3s ease-in-out',
  maxWidth: '24px',
  maxHeight: '24px',
  fill: '$background'
});

export const Button = styled('button', {
  fontFamily: 'inherit',
  fontSize: '20px',
  background: '$primary',
  color: '$background',
  padding: '0.4em 1em',
  paddingLeft: '0.9em',
  display: 'flex',
  alignItems: 'center',
  border: 'none',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'all 0.2s',
  width: 'fit-content',
  cursor: 'pointer',

  '&:hover': {
    [`${ButtonIconSvg}`]: {
      transform: 'translateX(1.2em) rotate(45deg) scale(1.1)'
    },
    [`& ${ButtonWrapper}`]: {
      animation: `${sendFly} 0.6s ease-in-out infinite alternate`
    },
    [`& ${ButtonText}`]: {
      transform: 'translateX(5em)'
    }
  },

  '&:active': {
    transform: 'scale(0.95)'
  }
});
