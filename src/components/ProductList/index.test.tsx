import { render } from '@testing-library/react';
import { ProductList } from './';
import { Product } from '../../types';
import { formatCurrency } from '../../utils/currency';

describe('ProductList', () => {
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Price', field: 'price' },
    {
      title: 'Action',
      render: (product: Product) => (
        <button onClick={() => product.fn && product.fn(product.id)}>
          Add to Cart
        </button>
      ),
    },
  ];
  const data = [
    {
      id: 1,
      name: 'Product 1',
      price: formatCurrency(10),
      asset: 'https://example.com/product1.jpg',
      fn: () => {},
    },
    {
      id: 2,
      name: 'Product 2',
      price: formatCurrency(10),
      asset: 'https://example.com/product2.jpg',
      fn: () => {},
    },
  ];
  const mockAction = jest.fn();

  it('should render a table with the given columns and data', () => {
    const { getByText } = render(
      <ProductList columns={columns} data={data} action={mockAction} />
    );

    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Price')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });
});
