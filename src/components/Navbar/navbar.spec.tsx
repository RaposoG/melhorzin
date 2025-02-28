import { Navbar } from './navbar';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/src/libs';
import i18next from 'i18next';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('cimode');

describe('<Navbar />', () => {
  test(`should by render a Navbar`, () => {
    renderWithProviders(<Navbar />);
    const header = screen.getByLabelText(/header/i);
    expect(header).toBeInTheDocument();
  });
});
