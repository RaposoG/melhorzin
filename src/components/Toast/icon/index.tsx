import { type IconBaseProps } from 'react-icons';
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri';
import type { IconProps } from '@/src/@types';

export const Icon = ({ isSuccess, ...rest }: IconProps & IconBaseProps) => {
  return (
    <>
      {isSuccess ? (
        <RiCheckboxCircleFill {...rest} />
      ) : (
        <RiErrorWarningFill {...rest} />
      )}
    </>
  );
};
