import Image from 'next/image';
import parse from 'html-react-parser';
import { Container, Section } from './styles';
import { useTranslation } from 'next-i18next';

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <Container aria-label='intro' alignItems>
      <Section>
        <Image
          alt='Michel Domingos'
          src='/static/images/micheldslive.jpg'
          width='300'
          height='406'
          priority
        />
      </Section>
      <Section>
        <blockquote>
          <p>{parse(t('pages.about.description'))}</p>
        </blockquote>
      </Section>
    </Container>
  );
};
