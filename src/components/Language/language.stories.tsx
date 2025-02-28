import type { StoryFn } from '@storybook/react';
import { LanguageSelect } from '.';

export default {
  title: 'Components/Language Select',
  component: LanguageSelect
};

const Template: StoryFn = () => {
  return <LanguageSelect />;
};

export const Default = Template.bind({});

Default.args = {};
