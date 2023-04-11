import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { UseProducts } from './graphql/custom-hooks';
import { ADD_ITEM_ORDER } from './graphql/mutations';
import useStateWithStorage from './hooks/useStateWithStorage';

import { Loading } from './components/Loading';
import { Product, ProductVariant } from './types';
import { formatCurrency } from './utils/currency';

const KEY_HEADER = 'headerSubtotal';
const DEFAULT_VALUE = 0;

const MIN_QUANTITY = 1;

const COLUMNS_PRODUCT = [
  {
    title: 'Asset',
    render: (rowData: Product) => (
      <img src={rowData.asset || './assets/not-found.jpg'} alt={rowData.name} />
    ),
  },
  { title: 'Name', field: 'name' },
  { title: 'Price', field: 'price' },
  {
    title: 'Action',
    render: ({ id, fn }: Product) => (
      <button onClick={() => fn && fn(id)}>Add Item</button>
    ),
  },
];

function App() {
  const { data, loading } = UseProducts();
  const [addItem, resultAddItem] = useMutation(ADD_ITEM_ORDER);
  const [subtotal, setSubtotal] = useStateWithStorage(
    KEY_HEADER,
    DEFAULT_VALUE
  );

  const dataJoined = data?.products.items.reduce(
    (accumulator: Product[], current: ProductVariant) => {
      let dataWrapped: Product[] = [];

      if (current.variants) {
        dataWrapped = current.variants.map((variant: ProductVariant) => ({
          id: variant.id,
          name: variant.name,
          price: formatCurrency(Number(variant.price)),
          asset: variant.product.featuredAsset?.preview,
        }));
      }

      return [...accumulator, ...dataWrapped];
    },
    []
  );

  const handleAddItem = (productId: number, quantity = MIN_QUANTITY) => {
    addItem({
      variables: { productVariantId: productId, quantity },
    });
  };

  useEffect(() => {
    if (resultAddItem.data) {
      setSubtotal(resultAddItem.data.addItemToOrder.subTotal);
    }
  }, [resultAddItem, setSubtotal]);

  return (
    <>
      <Header subtotal={subtotal} />
      <Loading loading={loading || resultAddItem.loading} />
      {dataJoined && (
        <ProductList
          columns={COLUMNS_PRODUCT}
          data={dataJoined}
          action={handleAddItem}
        />
      )}
    </>
  );
}

export default App;
