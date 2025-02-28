import { Toast } from './toast';
import { render, screen } from '@testing-library/react';

describe('<Toast />', () => {
  test(`should by render a Toast`, () => {
    render(
      <Toast
        title={'Sucess'}
        description={'Description'}
        showToast={true}
        setShowToast={() => jest.fn()}
      />
    );
    const toasts = screen.getAllByLabelText(/toast/i);
    toasts.map(toast => expect(toast).toBeInTheDocument());
  });
});
