import MainLayout from '@/components/MainLayout/MainLayout'
import styles from './index.module.css'
import clsx from 'clsx'
import { notoSansJp700, montserrat } from '../../../constants/font'

export default function Profile() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.title, montserrat.className)}>MY PROFILE</div>
      <div className={clsx(styles.heading, notoSansJp700.className)}>自己紹介</div>
    </div>
  )
}

Profile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
