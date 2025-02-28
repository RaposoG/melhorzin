import { type CSSProperties } from 'react';
import Lottie, { type LottieRef } from 'lottie-react';
import type { IconNameProps } from '@/src/@types';
import { getIcon } from '@/src/utils';

interface LottieRenderProps extends IconNameProps {
  lottieRef?: LottieRef;
  style?: CSSProperties;
}

export const LottieRender = ({
  iconName,
  lottieRef,
  style
}: LottieRenderProps) => {
  const iconStyle = { width: 24, height: 24 };

  return (
    <Lottie
      lottieRef={lottieRef}
      style={style || iconStyle}
      animationData={getIcon(iconName)}
      loop={false}
      autoplay={false}
    />
  );
};
