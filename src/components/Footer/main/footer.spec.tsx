import { Footer } from '.';
import { render, screen } from '@testing-library/react';

describe('<Footer />', () => {
  test(`should by render a Footer`, () => {
    render(<Footer />);
    const links = screen.getAllByLabelText(/link/i);
    links.map(link => expect(link).toBeInTheDocument());
  });
});
