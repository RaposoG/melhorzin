import type { StoryFn } from '@storybook/react';
import { NotFoundTemplate } from '.';

export default {
  title: 'Pages/Not Found',
  component: NotFoundTemplate
};

const Template: StoryFn = () => {
  return <NotFoundTemplate />;
};

export const Default = Template.bind({});

Default.args = {};
