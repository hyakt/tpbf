import { usePrefectures } from './api/use-prefectures'
import { usePrefectureStatesForCheckboxes } from './hooks/use-prefecture-states-for-checkboxes'
import { Checkbox } from '../../ui/checkbox'

export const Prefectures: React.VFC = () => {
  const { data, isError, isLoading } = usePrefectures()
  const { prefecturesStates, setPrefecturesStates } =
    usePrefectureStatesForCheckboxes(data)

  if (isLoading) return <div>loading...</div>
  if (isError) return <div>error!</div>

  return (
    <div data-testid="prefectures">
      {Object.values(prefecturesStates).map((prefectureState) => {
        const { prefName, prefCode, checked } = prefectureState
        return (
          <Checkbox
            key={prefCode}
            id={prefName}
            checked={checked}
            onChange={() => {
              setPrefecturesStates((prev) => {
                const prevPrefectureState = prev[prefName]
                return {
                  ...prev,
                  [prefName]: {
                    ...prevPrefectureState,
                    checked: !checked,
                  },
                }
              })
            }}
          >
            {prefName}
          </Checkbox>
        )
      })}
    </div>
  )
}
