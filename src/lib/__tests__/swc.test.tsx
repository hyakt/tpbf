import { render, waitFor } from '@testing-library/react'
import useSWR from 'swr'
import { GenerateSWRProvider } from '../swr'

it('use the fetcher configured in config when using `useSWR`', async () => {
  const MockComponent = () => {
    useSWR('/api/user')
    return <div />
  }

  const fetcher = jest.fn()
  const SWRProvider = GenerateSWRProvider(fetcher)

  render(
    <SWRProvider>
      <MockComponent />
    </SWRProvider>
  )

  await waitFor(async () => {
    expect(fetcher.mock.calls[0][0]).toBe('/api/user')
  })
})
