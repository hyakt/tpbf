import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { renderHook } from '@testing-library/react-hooks'
import { usePrefectures } from '../use-prefectures'
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
    const { result, waitForNextUpdate } = renderHook(() => usePrefectures(), {
      wrapper: SWRWrapper,
    })

    // first render
    expect(result.current).toStrictEqual({
      prefectures: [],
      isLoading: true,
      isError: undefined,
    })

    // fetch
    await waitForNextUpdate()

    // second render
    expect(result.current).toStrictEqual({
      prefectures: ['北海道', '青森県'],
      isLoading: false,
      isError: undefined,
    })
  })
})
