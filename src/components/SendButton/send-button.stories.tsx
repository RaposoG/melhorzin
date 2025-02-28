import type { Meta, StoryFn } from '@storybook/react';
import { useTranslation } from 'react-i18next';
import { SendButton } from '.';

export default {
  title: 'Components/Send Button',
  component: SendButton
} as Meta<typeof SendButton>;

const Template: StoryFn<typeof SendButton> = () => {
  const { t } = useTranslation();
  return (
    <SendButton type='submit'>{t('pages.contact.labels.button')}</SendButton>
  );
};

export const Default = Template.bind({});

Default.args = {};
