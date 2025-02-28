import { HomeTemplate } from '@/src/templates';
import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home = () => {
  return <HomeTemplate />;
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'pt'))
  }
});
