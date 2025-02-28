import type { Meta, StoryFn } from '@storybook/react';
import { Navbar } from '.';
import { NavbarContainer } from './styles';

export default {
  title: 'Components/Navbar',
  component: Navbar
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => {
  return (
    <NavbarContainer>
      <Navbar />
    </NavbarContainer>
  );
};

export const Default = Template.bind({});

Default.args = {};
