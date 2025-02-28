import type { Meta, StoryFn } from '@storybook/react';
import { Base } from '.';

export default {
  title: 'Components/Base',
  component: Base
} as Meta<typeof Base>;

const Template: StoryFn<typeof Base> = args => {
  return <Base {...args}></Base>;
};

export const Default = Template.bind({});

Default.args = {
  tagline: 'Code. Sleep. Repeat.',
  title: 'About | Michel Domingos',
  primaryColor: '#fff',
  secondaryColor: '#000'
};
