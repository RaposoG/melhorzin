import type { StoryFn } from '@storybook/react';
import { Moon as MoonComponent, Sun as SunComponent } from '.';

export default {
  title: 'Components/Themming/Icons',
  component: [MoonComponent, SunComponent]
};

const TemplateMoon: StoryFn = () => {
  return <MoonComponent />;
};
const TemplateSun: StoryFn = () => {
  return <SunComponent />;
};

export const Moon = TemplateMoon.bind({});
export const Sun = TemplateSun.bind({});

Moon.args = {};
Sun.args = {};
