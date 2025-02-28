import Head from 'next/head';
import { Base, Career, Intro } from '@/src/components';
import { stripHtml } from '@/src/utils';
import { useTranslation } from 'next-i18next';
import type { AboutProps } from '@/src/@types';

export const AboutTemplate = ({
  imagePath,
  primaryColor,
  secondaryColor
}: AboutProps) => {
  const { t } = useTranslation();
  return (
    <Base
      tagline={t('pages.about.tagline')}
      title={t('pages.about.title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('pages.about.title')}</title>
        <meta content={t('pages.about.title')} property='og:title' />
        <meta
          content={stripHtml(t('pages.about.description'))}
          name='description'
        />
        <meta
          content={stripHtml(t('pages.about.description'))}
          property='og:description'
        />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
        <meta
          content={`https://micode-dev.vercel.app/${imagePath}`}
          property='og:image'
        />
      </Head>

      <Intro />

      <h2>{t('pages.about.career')}</h2>
      <Career />
    </Base>
  );
};
