import { useCallback } from 'react'
import { ChangeEvent } from 'react'
import { Dispatch, SetStateAction } from 'react'
import { Checkbox } from '../../../ui/checkbox'
import { fetchPopulationTrends } from '../api/fetch-population-trends'
import { PrefectureStates } from '../hooks/use-prefecture-states-for-checkboxes'

type PrefectureCheckboxesProps = {
  prefectureStates: PrefectureStates
  setPrefecturesStates: Dispatch<SetStateAction<PrefectureStates>>
}

export const PrefectureCheckboxes: React.VFC<PrefectureCheckboxesProps> = ({
  prefectureStates,
  setPrefecturesStates,
}) => {
  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const { prefCode, populationTrends } = prefectureStates.find(
        (prefectureState) => prefectureState.prefName === e.target.id
      )

      const newPopulationTrends = populationTrends
        ? populationTrends
        : await fetchPopulationTrends({
            prefCode,
          })

      setPrefecturesStates((prev) => {
        const newPrefectureState = [...prev]
        const index = prev.findIndex((e) => prefCode === e.prefCode)
        const target = prev[index]
        target.checked = !target.checked
        target.populationTrends = newPopulationTrends
        newPrefectureState[index] = target

        return newPrefectureState
      })
    },
    [prefectureStates, setPrefecturesStates]
  )

  return (
    <div>
      {prefectureStates.map((prefectureState) => {
        const { prefName, prefCode, checked } = prefectureState
        return (
          <Checkbox
            key={prefCode}
            id={prefName}
            checked={checked}
            onChange={handleChange}
          >
            {prefName}
          </Checkbox>
        )
      })}
    </div>
  )
}
