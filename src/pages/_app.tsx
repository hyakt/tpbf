import type { AppProps } from 'next/app'
import { SWRProvider } from '../lib/swc'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  )
}

export default MyApp
