import { render, waitFor, fireEvent } from '@testing-library/react'
import { PrefectureCheckboxes } from '..'

it('render component', async () => {
  const { getByTestId } = render(
    <PrefectureCheckboxes
      prefectureStates={[]}
      setPrefecturesStates={() => void 0}
    />
  )

  await waitFor(() => {
    expect(getByTestId('prefecture-checkbox')).toBeInTheDocument()
  })
})

it('render checkboxes', async () => {
  const { getAllByTestId } = render(
    <PrefectureCheckboxes
      prefectureStates={[
        {
          prefName: '北海道',
          prefCode: 1,
          checked: true,
          populationTrends: [],
        },
        {
          prefName: '青森県',
          prefCode: 2,
          checked: true,
          populationTrends: [],
        },
      ]}
      setPrefecturesStates={() => void 0}
    />
  )

  await waitFor(() => {
    expect(getAllByTestId('ui-checkbox')).toHaveLength(2)
  })
})

it('call handler when check checkbox', async () => {
  const spy = jest.fn()
  const { getByTestId } = render(
    <PrefectureCheckboxes
      prefectureStates={[
        {
          prefName: '北海道',
          prefCode: 1,
          checked: true,
          populationTrends: [],
        },
      ]}
      setPrefecturesStates={spy}
    />
  )

  const checkbox = getByTestId('ui-checkbox')
  fireEvent.click(checkbox)

  await waitFor(() => {
    expect(spy).toBeCalled()
  })
})
