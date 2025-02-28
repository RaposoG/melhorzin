import { ShortcutError } from '.';
import { render, screen } from '@testing-library/react';

describe('<ShortcutError />', () => {
  test(`should by render a ShortcutError`, () => {
    render(<ShortcutError />);
    const shortcut = screen.getByLabelText(/shortcut/i);
    expect(shortcut).toBeInTheDocument();
  });
});
