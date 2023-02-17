import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ApolloProvider } from '@apollo/client'

import client from '../hasura/app'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <ApolloProvider client={client}>
    <Component {...pageProps} />
    </ApolloProvider>
    </SessionProvider>
  )
}
