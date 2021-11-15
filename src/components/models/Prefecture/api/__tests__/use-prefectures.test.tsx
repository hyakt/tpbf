import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook } from '@testing-library/react-hooks'
import { usePrefecture } from '../use-prefectures'
import { SWRWrapper } from '../../../../../../jest/swr-wrapper'

const apiResponseJson = {
  result: [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ],
}

const mockServer = setupServer(
  rest.get('/api/resas/prefectures', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiResponseJson))
  })
)

describe('usePrefectures', () => {
  beforeAll(() => mockServer.listen())
  afterAll(() => mockServer.close())
  afterEach(() => mockServer.resetHandlers())

  it('fetch values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePrefecture(), {
      wrapper: SWRWrapper,
    })

    // first render
    expect(result.current).toStrictEqual({
      data: undefined,
      isLoading: true,
      isError: undefined,
    })

    // fetch
    await waitForNextUpdate()

    // second render
    expect(result.current).toStrictEqual({
      data: apiResponseJson,
      isLoading: false,
      isError: undefined,
    })
  })
})
