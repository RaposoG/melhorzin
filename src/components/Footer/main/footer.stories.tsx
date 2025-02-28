import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Footer } from '.';

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta<typeof Footer>;

const Template: StoryFn<typeof Footer> = () => {
  return <Footer />;
};

export const Default = Template.bind({});

Default.args = {};
