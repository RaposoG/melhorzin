import { AllProjects } from '.';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '@/src/libs';
import { cleanup } from '@testing-library/react';
import i18next from 'i18next';

jest.mock('next/router', () => require('next-router-mock'));
void i18next.changeLanguage('pt');

afterEach(cleanup);

describe('<AllProjects />', () => {
  test(`should by render a AllProjects`, () => {
    renderWithProviders(<AllProjects />);

    const projects = screen.getAllByLabelText(/project/i);

    projects.map(project => expect(project).toBeInTheDocument());
  });
});
