type Props = {
  id: string
  checked: boolean
  onChange: () => void
}

export const Checkbox: React.FC<Props> = (props) => {
  const { id, children, checked, onChange } = props

  return (
    <label htmlFor={id}>
      <input
        data-testid="ui-checkbox-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  )
}
