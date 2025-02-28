import { styled } from '@/stitches.config';
import { RiGlobalLine } from 'react-icons/ri';

export const CustomContainer = styled('div', {
  display: 'flex',
  alignItems: 'center'
});

export const CustomSelect = styled('select', {
  background: 'none',
  border: 'none',
  color: '$primary',
  cursor: 'pointer',
  paddingRight: 0
});

export const CustomOption = styled('option', {
  backgroundColor: '$background',
  '&:hover': {
    background: '$primary'
  }
});

export const GlobalLineIcon = styled(RiGlobalLine, {
  maxWidth: '23px',
  fill: '$primary'
});
