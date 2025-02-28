import { Intro } from '..';
import { screen } from '@testing-library/react';
import i18next from 'i18next';
import { renderWithProviders } from '@/src/libs';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('cimode');

describe('<Intro />', () => {
  test(`should by render a Intro`, () => {
    renderWithProviders(<Intro />);
    const intro = screen.getByLabelText(/intro/i);
    expect(intro).toBeInTheDocument();
  });
});
