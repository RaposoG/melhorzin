import type { Meta, StoryFn } from '@storybook/react';
import { Intro } from '.';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Intro',
  component: Intro
} as Meta<typeof Intro>;

const Template: StoryFn<typeof Intro> = () => {
  return (
    <StoryBookContainer>
      <Intro />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
