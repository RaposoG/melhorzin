import type { StoryFn } from '@storybook/react';
import { Themming } from '.';

export default {
  title: 'Components/Themming',
  component: Themming
};

const Template: StoryFn = () => {
  return <Themming />;
};

export const Default = Template.bind({});

Default.args = {};
