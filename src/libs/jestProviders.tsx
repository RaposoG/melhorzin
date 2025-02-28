import { render, type RenderResult } from '@testing-library/react';
import { CommandBarProvider } from '@/src/providers';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(
    <I18nextProvider i18n={i18n}>
      <CommandBarProvider>{children}</CommandBarProvider>
    </I18nextProvider>
  );
