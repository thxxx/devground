import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from '@emotion/styled'

import * as ga from '../lib/gtag'

const MainStyle = styled.div`
  font-family: SCoreDream;
`

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider>
      <Head>
        <title>MEMO-ON</title>
        <meta
          name="description"
          content="현재 웹페이지에 바로 메모를 남기고 나중에 모아서 확인하세요."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyle>
        <Component {...pageProps} />
      </MainStyle>
    </ChakraProvider>
  )
}

export default MyApp
