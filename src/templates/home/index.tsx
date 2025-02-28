import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import { Layout, OpenCommandPalette } from '@/src/components';
import { useTranslation } from 'next-i18next';
import { Container, Content, Title } from '@/src/styles';
import { Developer } from '@/src/components';

export const HomeTemplate = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Head>
        <title>{t('pages.home.title')}</title>
        <meta content={t('pages.home.title')} property='og:title' />
        <meta content={t('pages.home.description')} name='description' />
        <meta content={t('pages.home.description')} property='og:description' />
        <meta content='https://micode-dev.vercel.app/' property='og:url' />
      </Head>
      <Container>
        <Content>
          <div>
            <Title>{t('pages.home.title')}</Title>
            <div>
              <strong>
                <Typewriter
                  options={{
                    strings: [t('pages.home.meta.1'), t('pages.home.meta.2')],
                    autoStart: true,
                    deleteSpeed: 80,
                    delay: 60,
                    loop: true
                  }}
                />
              </strong>
            </div>
            <OpenCommandPalette />
          </div>
          <div>
            <Developer />
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
