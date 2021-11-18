import styles from './styles/index.module.scss'

export type HeaderProps = {
  title: string
}

export const Header: React.VFC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <div className={styles['container']}>
        <h1 className={styles['title']}>{title}</h1>
      </div>
    </header>
  )
}
