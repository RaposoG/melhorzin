import type { Meta, StoryFn } from '@storybook/react';
import { Career } from '.';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Career',
  component: Career
} as Meta<typeof Career>;

const Template: StoryFn<typeof Career> = () => {
  return (
    <StoryBookContainer>
      <Career />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
