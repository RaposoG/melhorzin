import type { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Developer } from '.';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Developer',
  component: Developer
} as Meta<typeof Developer>;

const Template: StoryFn<typeof Developer> = () => {
  return (
    <StoryBookContainer>
      <Developer />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
