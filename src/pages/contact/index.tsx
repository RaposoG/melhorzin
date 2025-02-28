import { ContactTemplate, type ContactProps } from '@/src/templates';
import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact = (pageProps: ContactProps) => {
  return <ContactTemplate {...pageProps} />;
};

export default Contact;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = {
    primaryColor: 'purple',
    secondaryColor: 'cyan'
  };

  return {
    props: {
      ...meta,
      ...(await serverSideTranslations(locale ?? 'pt'))
    }
  };
};
