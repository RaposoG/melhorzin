import { MiCodeLogo } from '.';
import { render, screen } from '@testing-library/react';

describe('<MiCodeLogo />', () => {
  test(`should by render a MiCodeLogo`, () => {
    render(<MiCodeLogo />);
    const logo = screen.getByLabelText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});
