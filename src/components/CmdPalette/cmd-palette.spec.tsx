import { OpenCommandPalette } from '.';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/src/libs';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('cimode');

afterEach(cleanup);

describe('<OpenCommandPalette />', () => {
  test(`should by render a OpenCommandPalette`, () => {
    renderWithProviders(<OpenCommandPalette />);

    const cmdPalette = screen.getByLabelText(/cmd-palette/i);
    expect(cmdPalette).toBeInTheDocument();
  });
});
