import type { Meta, StoryFn } from '@storybook/react';
import { ShortcutError } from '.';

export default {
  title: 'Components/ShortcutError',
  component: ShortcutError
} as Meta<typeof ShortcutError>;

const Template: StoryFn<typeof ShortcutError> = () => {
  return <ShortcutError />;
};

export const Default = Template.bind({});

Default.args = {};
