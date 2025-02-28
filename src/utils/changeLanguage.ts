import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useMicodeStore } from '@/src/stores';

export const useChangeLanguage = () => {
  const { setLanguage } = useMicodeStore();
  const { push, pathname, query, asPath } = useRouter();

  const changeLanguage = useCallback(async (locale: string) => {
    setLanguage(locale);
    await i18n?.changeLanguage(locale);
    void push({ pathname, query }, asPath, {
      locale
    });
  }, []);

  return { changeLanguage };
};
