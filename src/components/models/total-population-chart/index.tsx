import { usePrefectures } from './api/use-prefectures'
import { usePrefectureStatesForCheckboxes } from './hooks/use-prefecture-states-for-checkboxes'

import { PopulationChart } from '../../ui/population-chart'
import { PrefectureCheckboxes } from './prefecture-checkboxes'

export const TotalPopulationChart: React.VFC = () => {
  const { data: prefectureData, isError, isLoading } = usePrefectures()
  const { prefectureStates, setPrefectureStates } =
    usePrefectureStatesForCheckboxes(prefectureData)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>

  return (
    <div data-testid="total-population-chart">
      <div data-testid="prefectures">
        <PrefectureCheckboxes
          prefectureStates={prefectureStates}
          setPrefecturesStates={setPrefectureStates}
        />
      </div>
      <div data-testid="chart">
        <PopulationChart
          populations={prefectureStates
            .filter((e) => e.checked)
            .map((e) => ({
              name: e.prefName,
              data: e.populationTrends,
            }))}
        />
      </div>
    </div>
  )
}
