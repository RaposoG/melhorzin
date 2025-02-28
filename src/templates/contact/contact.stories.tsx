import type { Meta, StoryFn } from '@storybook/react';
import { ContactTemplate, type ContactProps } from '.';

export default {
  title: 'Pages/Contact',
  component: ContactTemplate
} as Meta<ContactProps>;

const Template: StoryFn<ContactProps> = args => {
  return <ContactTemplate {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  primaryColor: 'purple',
  secondaryColor: 'cyan'
};
