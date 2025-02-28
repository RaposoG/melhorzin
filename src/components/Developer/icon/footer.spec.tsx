import { DeveloperIcon } from '.';
import { render, screen } from '@testing-library/react';

describe('<DeveloperIcon />', () => {
  test(`should by render a DeveloperIcon`, () => {
    render(<DeveloperIcon />);
    const developerIcon = screen.getByLabelText(/developerIcon/i);
    expect(developerIcon).toBeInTheDocument();
  });
});
