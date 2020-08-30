import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useConstant } from 'shared/hooks/useConstant'
import { App } from './App'
import { createApolloClient } from './createApolloClient'

export const AppContainer = () => {
  const apolloClient = useConstant(createApolloClient)

  return (
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  )
}
