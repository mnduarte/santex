import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS } from './queries';

export const UseProducts = () => {
  const result = useQuery(ALL_PRODUCTS);
  return result;
};
