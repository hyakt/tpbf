import { renderHook } from '@testing-library/react-hooks'
import { prefecturesResponse } from '../../__mocks__/resas'
import { usePrefectureStatesForCheckboxes } from '../use-prefecture-states-for-checkboxes'

describe('usePrefectureStatesForCheckboxes', () => {
  describe('pass empty array', () => {
    it('return values', () => {
      const data: undefined = undefined
      const { result } = renderHook(() =>
        usePrefectureStatesForCheckboxes(data)
      )

      expect(result.current.prefecturesStates).toStrictEqual({})
    })
  })
  describe('pass fullfiled array', () => {
    it('return values', () => {
      const data = prefecturesResponse
      const { result } = renderHook(() =>
        usePrefectureStatesForCheckboxes(data)
      )

      expect(result.current.prefecturesStates).toStrictEqual({
        北海道: {
          checked: false,
          prefCode: 1,
          prefName: '北海道',
        },
        青森県: {
          checked: false,
          prefCode: 2,
          prefName: '青森県',
        },
      })
    })
  })
})
