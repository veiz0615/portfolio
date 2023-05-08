import { FC } from 'react'
import styles from './TopView.module.css'

type Props = {}

const TopView: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Welcome to <br className={styles.sp} />
        Veiz.Code
      </div>
      <div className={styles.text}>
        Webページは、
        <br className={styles.sp} />
        メッセージだ
      </div>
    </div>
  )
}

export default TopView
