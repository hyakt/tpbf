import { useEffect, useState } from 'react'
import { APIResult, Prefecture } from '../api/use-prefectures'

export type PrefectureState = Prefecture & {
  checked: boolean
  populationTrends: number[] | undefined
}

export type PrefectureStates = PrefectureState[]

export const usePrefectureStatesForCheckboxes = (data: APIResult) => {
  const [prefectureStates, setPrefectureStates] = useState<PrefectureStates>([])

  useEffect(() => {
    if (!data) return
    const states = data.result.map((e) => ({
      prefCode: e.prefCode,
      prefName: e.prefName,
      checked: false,
      populationTrends: undefined,
    }))
    setPrefectureStates(states)
  }, [data])

  return {
    prefectureStates,
    setPrefectureStates,
  }
}
