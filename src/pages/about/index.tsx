import { AboutTemplate } from '@/src/templates';
import type { AboutProps } from '@/src/@types';
import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const About = (pageProps: AboutProps) => {
  return <AboutTemplate {...pageProps} />;
};

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = {
    imagePath: '/static/imagePaths/micheldslive.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple'
  };

  return {
    props: {
      ...meta,
      ...(await serverSideTranslations(locale ?? 'pt'))
    }
  };
};
