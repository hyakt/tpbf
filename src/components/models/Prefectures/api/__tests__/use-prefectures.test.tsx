import { renderHook } from '@testing-library/react-hooks'
import { usePrefectures } from '../use-prefectures'
import { SWRWrapper } from '../../../../../../jest/swr-wrapper'
import { mockServer, prefecturesResponse } from '../../__mocks__/resas'

describe('usePrefectures', () => {
  beforeAll(() => mockServer.listen())
  afterAll(() => mockServer.close())
  afterEach(() => mockServer.resetHandlers())

  it('return values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => usePrefectures(), {
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
      data: prefecturesResponse,
      isLoading: false,
      isError: undefined,
    })
  })
})
