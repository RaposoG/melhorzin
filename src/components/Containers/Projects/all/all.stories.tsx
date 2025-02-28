import type { Meta, StoryFn } from '@storybook/react';
import { AllProjects } from '.';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Projects List',
  component: AllProjects
} as Meta<typeof AllProjects>;

const Template: StoryFn<typeof AllProjects> = () => {
  return (
    <StoryBookContainer>
      <AllProjects />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
