import { ProjectsTemplate, type ProjectsProps } from '@/src/templates';
import { type GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Projects = (pageProps: ProjectsProps) => {
  return <ProjectsTemplate {...pageProps} />;
};

export default Projects;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const meta = {
    primaryColor: 'cyan',
    secondaryColor: 'green'
  };
  return {
    props: {
      ...meta,
      ...(await serverSideTranslations(locale ?? 'pt'))
    }
  };
};
