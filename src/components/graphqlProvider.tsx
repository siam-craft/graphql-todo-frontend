'use client';
import React from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const GraphQLProvider = ({ children }: any) => {
  const client = new Client({
    url: 'http://localhost:1337/graphql',
    exchanges: [cacheExchange, fetchExchange],
  });

  return <Provider value={client}>{children}</Provider>;
};

export default GraphQLProvider;
