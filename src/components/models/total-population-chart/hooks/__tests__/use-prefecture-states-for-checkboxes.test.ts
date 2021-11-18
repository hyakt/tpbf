import { renderHook } from '@testing-library/react-hooks'
import { mockServer, prefecturesResponse } from '../../__mocks__/resas'
import {
  fetchAndSetPopulation,
  usePrefectureStatesForCheckboxes,
} from '../use-prefecture-states-for-checkboxes'

describe('fetchAndSetPopulation', () => {
  beforeAll(() => mockServer.listen())
  afterAll(() => mockServer.close())
  afterEach(() => mockServer.resetHandlers())

  it('set values', async () => {
    const spy = jest.fn()
    await fetchAndSetPopulation(
      [
        {
          checked: false,
          prefCode: 1,
          prefName: '北海道',
          populationTrends: [],
        },
        {
          checked: true,
          populationTrends: [],
          prefCode: 2,
          prefName: '青森県',
        },
      ],
      spy
    )
    expect(spy.mock.calls[0]).toEqual([
      [
        {
          checked: false,
          populationTrends: [],
          prefCode: 1,
          prefName: '北海道',
        },
        {
          checked: true,
          populationTrends: [100, 200],
          prefCode: 2,
          prefName: '青森県',
        },
      ],
    ])
  })

  it('if target does not exist', async () => {
    const spy = jest.fn()
    await fetchAndSetPopulation(
      [
        {
          checked: false,
          prefCode: 1,
          prefName: '北海道',
          populationTrends: [],
        },
      ],
      spy
    )

    expect(spy).not.toBeCalled()
  })
})

describe('usePrefectureStatesForCheckboxes', () => {
  describe('pass empty array', () => {
    it('return values', () => {
      const data: undefined = undefined
      const { result } = renderHook(() =>
        usePrefectureStatesForCheckboxes(data)
      )

      expect(result.current.prefectureStates).toStrictEqual([])
    })
  })
  describe('pass fullfiled array', () => {
    it('set prefecture state', () => {
      const data = prefecturesResponse
      const { result } = renderHook(() =>
        usePrefectureStatesForCheckboxes(data)
      )

      expect(result.current.prefectureStates).toStrictEqual([
        {
          checked: false,
          prefCode: 1,
          prefName: '北海道',
          populationTrends: [],
        },
        {
          checked: false,
          prefCode: 2,
          prefName: '青森県',
          populationTrends: [],
        },
      ])
    })
  })
})
