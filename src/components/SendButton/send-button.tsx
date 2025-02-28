import { type SendButtonProps } from '@/src/@types';
import { ButtonIcon } from './icon';
import { Button, ButtonText, ButtonWrapper } from './styles';

export const SendButton = ({ children, ...rest }: SendButtonProps) => {
  return (
    <Button {...rest}>
      <ButtonWrapper>
        <ButtonIcon />
      </ButtonWrapper>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};
