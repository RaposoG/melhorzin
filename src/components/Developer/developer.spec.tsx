import { Developer } from '.';
import { render, screen } from '@testing-library/react';

describe('<Developer />', () => {
  test(`should by render a Developer`, () => {
    render(<Developer />);
    const developers = screen.getAllByLabelText(/dev/i);
    developers.map(developer => expect(developer).toBeInTheDocument());
  });
});
