import { i18n } from 'next-i18next';
import { useChangeLanguage } from '@/src/utils';

import {
  CustomContainer,
  CustomOption,
  CustomSelect,
  GlobalLineIcon
} from './styles';

export const LanguageSelect = () => {
  const { changeLanguage } = useChangeLanguage();
  return (
    <CustomContainer aria-label='language'>
      <GlobalLineIcon />
      <CustomSelect
        defaultValue={i18n?.language}
        onChange={event => void changeLanguage(event.target.value)}
      >
        <CustomOption value='pt'>pt</CustomOption>
        <CustomOption value='en'>en</CustomOption>
      </CustomSelect>
    </CustomContainer>
  );
};
