import {
  Footer,
  Navbar,
  Stars,
  PostContainer,
  PostContent,
  PostMain
} from '@/src/components';
import { type BaseProps } from '@/src/@types';
import { GradientTitle, Wrapper } from './styles';
import parse from 'html-react-parser';

export const Base = ({
  children,
  primaryColor,
  secondaryColor,
  tagline,
  title
}: BaseProps) => {
  return (
    <Wrapper aria-label='base'>
      <Navbar />
      <PostMain
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000'
          }
        }}
      >
        <PostContent>
          <PostContainer>
            <GradientTitle
              css={{
                'span': {
                  backgroundImage: `linear-gradient(
                    135deg,
                    $${primaryColor} 0%,
                    $${secondaryColor} 100%
                  );`
                }
              }}
            >
              {parse(tagline ? tagline : title)}
            </GradientTitle>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
      <Stars />
    </Wrapper>
  );
};
