import { useEffect, useState } from 'react'
import { ResasAPIResult } from '../api/use-prefectures'

type PrefectureState = {
  prefCode: number
  prefName: string
  checked: boolean
}

type PrefectureStates = {
  [prefName: string]: PrefectureState
}

export const usePrefectureStatesForCheckboxes = (data: ResasAPIResult) => {
  const [prefecturesStates, setPrefecturesStates] = useState<PrefectureStates>(
    {}
  )

  useEffect(() => {
    const prefectureObj = (data?.result || []).reduce<PrefectureStates>(
      (acc, cur) => ({
        ...acc,
        [cur.prefName]: {
          prefCode: cur.prefCode,
          prefName: cur.prefName,
          checked: false,
        },
      }),
      {}
    )
    setPrefecturesStates(prefectureObj)
  }, [data])

  return {
    prefecturesStates,
    setPrefecturesStates,
  }
}
