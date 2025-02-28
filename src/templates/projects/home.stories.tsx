import type { Meta, StoryFn } from '@storybook/react';
import { ProjectsTemplate, type ProjectsProps } from '.';

export default {
  title: 'Pages/Projects',
  component: ProjectsTemplate
} as Meta<ProjectsProps>;

const Template: StoryFn<ProjectsProps> = args => {
  return <ProjectsTemplate {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  primaryColor: 'cyan',
  secondaryColor: 'green'
};
