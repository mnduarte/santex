import { render, screen } from '@testing-library/react';
import { Header } from './';
import { formatCurrency } from '../../utils/currency';


describe('Header', () => {
  it('should render without errors and display store name and subtotal', () => {
    const subtotal = 100;
    render(<Header subtotal={subtotal} />);
    expect(screen.getByText('My Store')).toBeInTheDocument();
    expect(screen.getByText(`Subtotal: ${formatCurrency(subtotal)}`)).toBeInTheDocument();
  });

  it('should format the subtotal correctly', () => {
    const subtotal = 1000;
    render(<Header subtotal={subtotal} />);
    expect(screen.getByText(`Subtotal: ${formatCurrency(subtotal)}`)).toBeInTheDocument();
  });

});
