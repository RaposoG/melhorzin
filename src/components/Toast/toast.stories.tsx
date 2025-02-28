import type { Meta, StoryFn } from '@storybook/react';
import { Toast } from './toast';
import type { ToastProps } from '@/src/@types';
import { useArgs } from '@storybook/client-api';

export default {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    setShowToast: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ToastProps>;

const Template: StoryFn<ToastProps> = args => {
  const [, updateArgs] = useArgs<ToastProps>();
  const setShowToast = () => {
    updateArgs({ showToast: false });
  };

  const newArgs = { ...args, setShowToast };

  return <Toast {...newArgs} />;
};

export const Default = Template.bind({});

Default.args = {
  title: 'Copied :D',
  description: 'You can now share it with anyone.',
  isSuccess: true,
  showToast: true,
  setShowToast: () => true
};
