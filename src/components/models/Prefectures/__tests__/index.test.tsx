import { SWRWrapper } from '../../../../../jest/swr-wrapper'
import { mockServer } from '../__mocks__/resas'
import { render, waitFor } from '@testing-library/react'
import { Prefectures } from '..'

describe('Prefectures', () => {
  beforeAll(() => mockServer.listen())
  afterAll(() => mockServer.close())
  afterEach(() => mockServer.resetHandlers())

  it('render component', async () => {
    const { getByTestId } = render(
      <SWRWrapper>
        <Prefectures />
      </SWRWrapper>
    )

    await waitFor(() => {
      expect(getByTestId('prefectures')).toBeInTheDocument()
    })
  })

  it('render checkboxes', async () => {
    const { getAllByTestId } = render(
      <SWRWrapper>
        <Prefectures />
      </SWRWrapper>
    )

    await waitFor(() => {
      expect(getAllByTestId('ui-checkbox')).toHaveLength(2)
    })
  })
})
