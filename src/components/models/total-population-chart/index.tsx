import { usePrefectures } from './api/use-prefectures'
import { usePrefectureStatesForCheckboxes } from './hooks/use-prefecture-states-for-checkboxes'

import { PopulationChart } from '../../ui/population-chart'
import { PrefectureCheckboxes } from './prefecture-checkboxes'

import styles from './style/index.module.scss'

export const TotalPopulationChart: React.VFC = () => {
  const { data: prefectureData, isError, isLoading } = usePrefectures()
  const { prefectureStates, setPrefectureStates } =
    usePrefectureStatesForCheckboxes(prefectureData)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error</div>

  return (
    <div data-testid="total-population-chart" className={styles['container']}>
      <div data-testid="prefectures">
        <div className={styles['prefectures']}>
          <h4 className={styles['label']}>都道府県</h4>
          <div className={styles['checkboxes']}>
            <PrefectureCheckboxes
              prefectureStates={prefectureStates}
              setPrefecturesStates={setPrefectureStates}
            />
          </div>
        </div>
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
