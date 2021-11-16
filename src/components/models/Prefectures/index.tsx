import { usePrefectures } from './api/use-prefectures'
import { usePrefectureStateForCheckboxes } from './hooks/use-prefecture-state-for-checkboxes'
import { Checkbox } from '../../ui/checkbox'

export const Prefectures: React.VFC = () => {
  const { prefectures, isError, isLoading } = usePrefectures()
  const { prefecturesState, setPrefecturesState } =
    usePrefectureStateForCheckboxes(prefectures)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error!</div>

  return (
    <div data-testid="prefectures">
      {Object.entries(prefecturesState).map(([prefName, checked]) => {
        return (
          <Checkbox
            key={prefName}
            id={prefName}
            checked={checked}
            onChange={() => {
              setPrefecturesState((prev) => ({
                ...prev,
                [prefName]: !prev[prefName],
              }))
            }}
          >
            {prefName}
          </Checkbox>
        )
      })}
    </div>
  )
}
