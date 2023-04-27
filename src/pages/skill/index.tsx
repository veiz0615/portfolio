import MainLayout from '@/components/MainLayout/MainLayout'
import styles from './index.module.css'
import clsx from 'clsx'
import { notoSansJp700, montserrat } from '../../../constants/font'

export default function Skill() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.title, montserrat.className)}>MY SKILLS</div>
      <div className={clsx(styles.heading, notoSansJp700.className)}>スキル一覧</div>
    </div>
  )
}

Skill.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
