import type { Meta, StoryFn } from '@storybook/react';
import { FeaturedProjects } from '.';
import { featured } from '@/src/data';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Featured Projects',
  component: FeaturedProjects
} as Meta<typeof FeaturedProjects>;

const Template: StoryFn<typeof FeaturedProjects> = () => {
  return (
    <StoryBookContainer>
      <FeaturedProjects />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = {
  featured
};
