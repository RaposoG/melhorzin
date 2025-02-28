import type { StoryFn } from '@storybook/react';
import { HomeTemplate } from '.';

export default {
  title: 'Pages/Home',
  component: HomeTemplate
};

const Template: StoryFn = () => {
  return <HomeTemplate />;
};

export const Default = Template.bind({});

Default.args = {};
