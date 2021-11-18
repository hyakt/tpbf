import type { AppProps } from 'next/app'
import { SWRProvider } from '../lib/swr'
import 'modern-normalize/modern-normalize.css'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  )
}

export default MyApp
