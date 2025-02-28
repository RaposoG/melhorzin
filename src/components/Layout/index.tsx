import { type PropsWithChildren } from 'react';
import { Footer, Navbar, Stars } from '@/src/components';
import { Wrapper } from './style';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
      <Stars />
    </Wrapper>
  );
};
