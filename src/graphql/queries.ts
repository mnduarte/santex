// Here we put queries. Remove next line
import { gql } from '@apollo/client';

export const ALL_PRODUCTS = gql`
  query {
    products {
      items {
        variants {
          id
          name
          product {
            name
            description
            featuredAsset {
              preview
            }
          }
          price
        }
      }
    }
  }
`;
