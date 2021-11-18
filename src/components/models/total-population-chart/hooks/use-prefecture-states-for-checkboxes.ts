import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { fetchPopulationTrends } from '../api/fetch-population-trends'
import { APIResult, Prefecture } from '../api/use-prefectures'

export type PrefectureState = Prefecture & {
  checked: boolean
  populationTrends: number[]
}

export type PrefectureStates = PrefectureState[]

export const fetchAndSetPopulation = async (
  prefectureStates: PrefectureStates,
  setPrefectureStates: Dispatch<SetStateAction<PrefectureStates>>
) => {
  const newPrefectureStates = [...prefectureStates]
  const index = prefectureStates.findIndex(
    (prefectureState) =>
      // 取得したデータがある場合はデータを取得せず保存してあるデータを利用する
      prefectureState.populationTrends.length === 0 && prefectureState.checked
  )
  // 存在しない場合はfetchしない
  if (index < 0) return

  const target = prefectureStates[index]
  const newPopulationTrends = await fetchPopulationTrends({
    prefCode: target.prefCode,
  })
  target.populationTrends = newPopulationTrends
  newPrefectureStates[index] = target

  setPrefectureStates(newPrefectureStates)
}

export const usePrefectureStatesForCheckboxes = (data: APIResult) => {
  const [prefectureStates, setPrefectureStates] = useState<PrefectureStates>([])

  useEffect(() => {
    if (!data) return
    const states = data.result.map((e) => ({
      prefCode: e.prefCode,
      prefName: e.prefName,
      checked: false,
      populationTrends: [],
    }))
    setPrefectureStates(states)
  }, [data])

  useEffect(() => {
    fetchAndSetPopulation(prefectureStates, setPrefectureStates)
  }, [prefectureStates])

  return {
    prefectureStates,
    setPrefectureStates,
  }
}
