import { renderHook } from '@testing-library/react-hooks'
import { usePrefectureStateForCheckboxes } from '../use-prefecture-state-for-checkboxes'

describe('usePrefectureStateForCheckboxes', () => {
  it('return values', () => {
    const prefectures = ['北海道', '青森県']
    const { result } = renderHook(() =>
      usePrefectureStateForCheckboxes(prefectures)
    )

    expect(result.current.prefecturesState).toStrictEqual({
      北海道: false,
      青森県: false,
    })
  })
})
