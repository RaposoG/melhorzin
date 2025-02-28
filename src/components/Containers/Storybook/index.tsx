import { PostContainer, PostContent, Stars } from '@/src/components';
import { Wrapper } from '@/src/components/Base/styles';
import { type PropsWithChildren } from 'react';

export const StoryBookContainer = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <PostContent>
        <PostContainer>{children}</PostContainer>
      </PostContent>
      <Stars />
    </Wrapper>
  );
};
