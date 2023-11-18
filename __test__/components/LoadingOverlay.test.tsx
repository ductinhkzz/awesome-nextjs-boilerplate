import { LoadingOverlay } from '@/components';
import { render, screen } from '@testing-library/react';

describe('LoadingOverlay component', () => {
  it('render', () => {
    render(<LoadingOverlay />);

    const loading = screen.getByTestId('loading-overlay');

    expect(loading).toBeInTheDocument();
  });
});
