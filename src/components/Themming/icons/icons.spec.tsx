import { Moon, Sun } from '.';
import { render, screen } from '@testing-library/react';

describe('<Themming Icons />', () => {
  test(`should by render a Moon`, () => {
    const { getByLabelText } = render(<Moon />);
    const moon = getByLabelText(/moon/i);
    expect(moon).toBeInTheDocument();
  });
  test(`should by render a Sun`, () => {
    render(<Sun />);
    const sun = screen.getByLabelText(/sun/i);
    expect(sun).toBeInTheDocument();
  });
});
