import { renderHook } from '@testing-library/react-hooks'
import { prefecturesResponse } from '../../__mocks__/resas'
import { usePrefectureStatesForCheckboxes } from '../use-prefecture-states-for-checkboxes'

describe('pass empty array', () => {
  it('return values', () => {
    const data: undefined = undefined
    const { result } = renderHook(() => usePrefectureStatesForCheckboxes(data))

    expect(result.current.prefectureStates).toStrictEqual([])
  })
})
describe('pass fullfiled array', () => {
  it('return values', () => {
    const data = prefecturesResponse
    const { result } = renderHook(() => usePrefectureStatesForCheckboxes(data))

    expect(result.current.prefectureStates).toStrictEqual([
      {
        checked: false,
        prefCode: 1,
        prefName: '北海道',
        populationTrends: undefined,
      },
      {
        checked: false,
        prefCode: 2,
        prefName: '青森県',
        populationTrends: undefined,
      },
    ])
  })
})
