import MainLayout from '@/components/MainLayout/MainLayout'
import styles from './index.module.css'
import clsx from 'clsx'
import { lora700, notoSansJp700 } from '../../../constants/font'
import SkillView, { IconViewInfo } from './SkillView/SkillView'

export default function Skill() {
  const iconViewInfos: IconViewInfo[] = [
    {
      imageType: 'html',
      name: 'HTML',
    },
    {
      imageType: 'css',
      name: 'CSS',
    },
    {
      imageType: 'javaScript',
      name: 'JavaScript',
    },
    {
      imageType: 'typeScript',
      name: 'TypeScript',
    },
    {
      imageType: 'react',
      name: 'react',
    },
    {
      imageType: 'next',
      name: 'Next.js',
    },
    {
      imageType: 'git',
      name: 'Git',
    },
    {
      imageType: 'vue',
      name: 'Vue.js',
    },
    {
      imageType: 'node',
      name: 'Node.js',
    },
  ]

  return (
    <>
      <div className={styles.root}>
        <div className={clsx(styles.title, lora700.className)}>MY SKILLS</div>
        <div className={clsx(styles.heading, notoSansJp700.className)}>スキル一覧</div>
      </div>
      <SkillView iconViewInfos={iconViewInfos} />
    </>
  )
}

Skill.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
