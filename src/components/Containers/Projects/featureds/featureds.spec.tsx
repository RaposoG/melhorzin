import { FeaturedProjects } from '.';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/src/libs';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('pt');

afterEach(cleanup);

describe('<FeaturedProjects />', () => {
  test(`should by render a FeaturedProjects`, () => {
    renderWithProviders(<FeaturedProjects />);

    const featuredProjects = screen.getByLabelText(/featuredProjects/i);
    expect(featuredProjects).toBeInTheDocument();
  });
});
