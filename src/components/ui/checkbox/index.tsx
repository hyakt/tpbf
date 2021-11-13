type Props = {
  id: string
}

export const Checkbox: React.FC<Props> = (props) => {
  const { id, children } = props
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} />
      {children}
    </label>
  )
}
