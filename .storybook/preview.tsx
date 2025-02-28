import React, { useEffect } from 'react';
import { StoryContext, StoryFn, type Preview } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { CommandBarProvider, ThemeProvider } from '../src/providers';
import i18n from '../i18n';
import { useMicodeStore } from '../src/stores';

const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const { theme } = context.globals;
  const { setDark } = useMicodeStore();

  useEffect(() => {
    setDark(() => theme === 'light');
  }, [theme]);

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

const withI18nextProvider = (Story: StoryFn, context: StoryContext) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  );
};
const withCommandProvider = (Story: StoryFn) => {
  return (
    <CommandBarProvider>
      <Story />
    </CommandBarProvider>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'transparent',
      values: [
        {
          name: 'transparent',
          value: 'transparent'
        }
      ]
    }
  },
  decorators: [withI18nextProvider, withCommandProvider, withThemeProvider]
};

export const globalTypes = {
  locale: {
    name: 'Language',
    description: 'Internationalization locale',
    defaultValue: 'pt',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'pt', title: 'Português' },
        { value: 'en', title: 'English' }
      ],
      showName: true,
      dynamicTitle: true
    }
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'dark', icon: 'moon', title: 'Dark' },
        { value: 'light', icon: 'sun', title: 'Light' }
      ],
      showName: true,
      dynamicTitle: true
    }
  }
};

export default preview;
