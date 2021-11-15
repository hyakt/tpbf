import { fireEvent, render } from '@testing-library/react'
import { Checkbox } from '..'

describe('Checkbox', () => {
  describe('props', () => {
    const inputTestId = 'ui-checkbox-input'
    describe('checked', () => {
      it('passing `checked` will change the status of inputs checked', async () => {
        const { getByTestId } = render(
          <Checkbox id="id" checked={true} onChange={() => {}} />
        )

        expect((getByTestId(inputTestId) as HTMLInputElement).checked).toBe(
          true
        )
      })
    })
    describe('onChange', () => {
      it('handler is called when an input is clicked', async () => {
        const handleChange = jest.fn()

        const { getByTestId } = render(
          <Checkbox id="id" checked={true} onChange={handleChange} />
        )
        expect(handleChange).not.toBeCalled()

        // input要素をクリックするとhandleChangeが呼ばれる
        fireEvent.click(getByTestId(inputTestId))
        expect(handleChange).toBeCalled()
      })
    })
  })
})
