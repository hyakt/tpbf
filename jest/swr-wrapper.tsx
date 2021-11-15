import { SWRConfig } from 'swr'
import { fetcher } from '../src/lib/fetcher'

export const SWRWrapper: React.FC = ({ children }) => (
  <SWRConfig value={{ dedupingInterval: 0, fetcher }}>{children}</SWRConfig>
)
