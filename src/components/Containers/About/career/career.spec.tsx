import { Career } from '.';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

describe('<Career />', () => {
  test(`should by render a Career`, () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Career />
      </I18nextProvider>
    );
    const careers = screen.getAllByLabelText(/career/i);
    careers.map(career => expect(career).toBeInTheDocument());
  });
});
