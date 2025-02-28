import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { LanguageSelect } from '.';
import i18n from '@/i18n';

jest.mock('next/router', () => require('next-router-mock'));

describe('<LanguageSelect />', () => {
  it('should render the LanguageSelect', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageSelect />
      </I18nextProvider>
    );

    const language = screen.getByLabelText(/language/i);
    expect(language).toBeInTheDocument();
  });
});
