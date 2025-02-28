import Head from 'next/head';
import { Base, AllProjects, FeaturedProjects } from '@/src/components';
import { useProjects } from '@/src/data';
import { useTranslation } from 'next-i18next';
import { getTotalProjects, stripHtml } from '@/src/utils';
import { type DefaultProps } from '@/src/@types';
import { useMemo } from 'react';

export type ProjectsProps = DefaultProps;

export const ProjectsTemplate = ({
  primaryColor,
  secondaryColor
}: ProjectsProps) => {
  const { t } = useTranslation();
  const { projects } = useProjects();
  const totalProjects = useMemo(() => getTotalProjects(projects), []);

  return (
    <Base
      tagline={t('pages.projects.tagline')}
      title={t('pages.projects.title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('pages.projects.title')}</title>
        <meta content={t('pages.projects.title')} property='og:title' />
        <meta
          content={stripHtml(
            t('pages.projects.description', {
              totalProjects: String(totalProjects)
            })
          )}
          name='description'
        />
        <meta
          content={stripHtml(
            t('pages.projects.description', {
              totalProjects: String(totalProjects)
            })
          )}
          property='og:description'
        />
        <meta
          content='https://micode-dev.vercel.app/projects'
          property='og:url'
        />
      </Head>

      <p
        dangerouslySetInnerHTML={{
          __html: t('pages.projects.description', {
            totalProjects: String(totalProjects)
          })
        }}
      />

      <h2>{t('pages.projects.featured')}</h2>
      <FeaturedProjects />

      <h2>{t('pages.projects.all')}</h2>
      <AllProjects />
    </Base>
  );
};
