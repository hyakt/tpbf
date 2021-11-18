import { Header, HeaderProps } from './header'
import styles from './styles/index.module.scss'

type LayoutProps = {
  headerProps: HeaderProps
}

export const Layout: React.FC<LayoutProps> = ({ headerProps, children }) => {
  return (
    <>
      <Header {...headerProps} />
      <main className={styles['main']}>
        <div className={styles['container']}>{children}</div>
      </main>
    </>
  )
}
