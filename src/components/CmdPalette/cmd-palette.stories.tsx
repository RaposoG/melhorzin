import type { Meta, StoryFn } from '@storybook/react';
import { OpenCommandPalette } from './cmd-palette';
import { StoryBookContainer } from '@/src/components';

export default {
  title: 'Components/Command Palette',
  component: OpenCommandPalette
} as Meta<typeof OpenCommandPalette>;

const Template: StoryFn<typeof OpenCommandPalette> = args => {
  return (
    <StoryBookContainer>
      <OpenCommandPalette {...args} />
    </StoryBookContainer>
  );
};

export const Default = Template.bind({});

Default.args = { type: 'windows' };
