import Head from 'next/head';
import { Base } from '@/src/components';
import { stripHtml } from '../../utils/stripHtml';
import type { DefaultProps } from '@/src/@types';
import { useTranslation } from 'next-i18next';
import { Contact } from './contact';

export type ContactProps = DefaultProps;

export const ContactTemplate = ({
  primaryColor,
  secondaryColor
}: ContactProps) => {
  const { t } = useTranslation();

  return (
    <Base
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      title={t('pages.contact.title')}
      tagline={t('pages.contact.tagline')}
    >
      <Head>
        <title>{t('pages.contact.title')}</title>
        <meta content={t('pages.contact.title')} property='og:title' />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          name='description'
        />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          property='og:description'
        />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
      </Head>

      <Contact.Unform />
    </Base>
  );
};
