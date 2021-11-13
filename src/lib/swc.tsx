import { SWRConfig, Fetcher } from 'swr'
import { fetcher } from './fetcher'

export const GenerateSWRProvider = (fetcher: Fetcher<unknown>) => {
  const SWRProvider: React.FC = ({ children }) => (
    <SWRConfig value={{ fetcher }}>{children}</SWRConfig>
  )
  return SWRProvider
}

export const SWRProvider = GenerateSWRProvider(fetcher)
