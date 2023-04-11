import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const commerceLink = createHttpLink({
  uri: 'https://demo.vendure.io/shop-api/shop-api',
  headers: {
    authorization: localStorage.getItem('Auth-Token')
      ? `Bearer ${localStorage.getItem('Auth-Token')}`
      : '',
  },
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader) {
      localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([afterwareLink, commerceLink]),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
