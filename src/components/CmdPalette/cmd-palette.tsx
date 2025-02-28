import { useKBar } from 'kbar';
import { GeneralButton } from '@/src/components';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';
import { getDeviceType } from '@/src/utils/getDeviceType';
import { type OpenCommandPalleteProps } from '@/src/@types';

export const OpenCommandPalette = ({ type }: OpenCommandPalleteProps) => {
  const { query } = useKBar();
  const { t } = useTranslation();
  const translation = {
    mobile: t('common.kbar.start.mobile'),
    mac: parse(
      t('common.kbar.start.desktop', {
        cmd: '⌘',
        key: 'K'
      })
    ),
    windows: parse(
      t('common.kbar.start.desktop', {
        cmd: 'ctrl',
        key: 'K'
      })
    )
  };

  const deviceType = type || getDeviceType();

  return (
    <GeneralButton
      type='button'
      onClick={query.toggle}
      aria-label='cmd-palette'
    >
      {translation[deviceType]}
    </GeneralButton>
  );
};
