import type { Meta, StoryFn } from '@storybook/react';
import { MiCodeLogo } from '.';
import { LogoContainer } from './styles';

export default {
  title: 'Components/Logo',
  component: MiCodeLogo
} as Meta<typeof MiCodeLogo>;

const Template: StoryFn<typeof MiCodeLogo> = () => {
  return (
    <LogoContainer>
      <MiCodeLogo />
    </LogoContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
