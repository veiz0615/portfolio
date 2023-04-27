import { FC } from 'react'
import styles from './TopView.module.css'

type Props = {}

const TopView: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Welcome to Veiz.Code</h1>
      <p className={styles.text}>Webページは、メッセージだ</p>
    </div>
  )
}

export default TopView
