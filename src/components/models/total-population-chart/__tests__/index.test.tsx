import { SWRWrapper } from '../../../../../jest/swr-wrapper'
import { mockServer } from '../__mocks__/resas'
import { render, waitFor } from '@testing-library/react'
import { TotalPopulationChart } from '..'

beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())
afterEach(() => mockServer.resetHandlers())

it('render component', async () => {
  const { getByTestId } = render(
    <SWRWrapper>
      <TotalPopulationChart />
    </SWRWrapper>
  )

  await waitFor(() => {
    expect(getByTestId('total-population-chart')).toBeInTheDocument()
  })
})

it('render checkboxes', async () => {
  const { getAllByTestId } = render(
    <SWRWrapper>
      <TotalPopulationChart />
    </SWRWrapper>
  )

  await waitFor(() => {
    expect(getAllByTestId('ui-checkbox')).toHaveLength(2)
  })
})
