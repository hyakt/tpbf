import styles from './styles/index.module.scss'

type CheckboxProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { id, children, checked, onChange } = props

  return (
    <label data-testid="ui-checkbox" className={styles.label} htmlFor={id}>
      <input
        data-testid="ui-checkbox-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox}
      />
      {children}
    </label>
  )
}
