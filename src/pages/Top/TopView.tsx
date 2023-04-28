import { FC } from 'react'
import styles from './TopView.module.css'

type Props = {}

const TopView: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Welcome to <br className={styles.sp} />
        Veiz.Code
      </h1>
      <p className={styles.text}>
        Webページは、
        <br className={styles.sp} />
        メッセージだ
      </p>
    </div>
  )
}

export default TopView
