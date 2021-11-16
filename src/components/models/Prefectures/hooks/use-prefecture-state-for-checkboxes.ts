import { useEffect, useState } from 'react'

export const usePrefectureStateForCheckboxes = (prefectures: string[]) => {
  const [prefecturesState, setPrefecturesState] = useState<
    Record<string, boolean>
  >({})

  useEffect(() => {
    const data = prefectures.reduce<Record<string, boolean>>(
      (acc, cur) => ({
        ...acc,
        [cur]: false,
      }),
      {}
    )
    setPrefecturesState(data)
  }, [prefectures])

  return {
    prefecturesState,
    setPrefecturesState,
  }
}
