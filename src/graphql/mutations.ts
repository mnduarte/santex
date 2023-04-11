// Here we put mutations. Remove next line
import { gql } from '@apollo/client';

export const ADD_ITEM_ORDER = gql`
  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        lines {
          id
          productVariant {
            id
            name
          }
          quantity
        }
        subTotal
        total
      }
    }
  }
`;