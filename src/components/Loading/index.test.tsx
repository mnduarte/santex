import { render, screen } from '@testing-library/react';
import { Loading } from './';

describe('Loading', () => {
  it('renders nothing when loading prop is false', () => {
    render(<Loading loading={false} />);
    expect(screen.queryByTestId('loading-wrapper')).not.toBeInTheDocument();
  });
});