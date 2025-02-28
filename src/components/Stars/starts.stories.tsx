import type { Meta, StoryFn } from '@storybook/react';
import { Stars } from '.';

export default {
  title: 'Components/Stars',
  component: Stars
} as Meta<typeof Stars>;

const Template: StoryFn<typeof Stars> = () => {
  return <Stars />;
};

export const Default = Template.bind({});

Default.args = {};
