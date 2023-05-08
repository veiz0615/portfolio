import { FC } from 'react'
import styles from './SkillView.module.css'
import IconView from './IconView/IconView'

export type IconViewInfo = {
  imageType:
    | 'html'
    | 'css'
    | 'javaScript'
    | 'typeScript'
    | 'react'
    | 'next'
    | 'vue'
    | 'node'
    | 'git'
  name: string
}

type Props = {
  iconViewInfos: IconViewInfo[]
}

const SkillView: FC<Props> = ({ iconViewInfos }) => {
  return (
    <div className={styles.root}>
      <div className={styles.skills}>
        <div className={styles.title}>学習した言語一覧</div>
        <div className={styles.icons}>
          {/* <IconView imageType={iconViewInfos[0].imageType} name={iconViewInfos[0].name} /> */}
          {/* <IconView imageType={iconViewInfos[1].imageType} name={iconViewInfos[1].name} />
          <IconView imageType={iconViewInfos[2].imageType} name={iconViewInfos[2].name} />
          <IconView imageType={iconViewInfos[3].imageType} name={iconViewInfos[3].name} /> */}
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>使用しているフレームワーク</div>
          <div className={styles.icons}>
            {/* <IconView imageType={iconViewInfos[4].imageType} name={iconViewInfos[4].name} />
            <IconView imageType={iconViewInfos[5].imageType} name={iconViewInfos[5].name} /> */}
          </div>
        </div>
        <div className={styles.right}>
          {/* <IconView imageType={iconViewInfos[6].imageType} name={iconViewInfos[6].name} /> */}
        </div>
      </div>
      <div className={styles.future}>
        <div className={styles.title}>今後学んでいきたい内容</div>
        <div className={styles.icons}>
          {/* <IconView imageType={iconViewInfos[7].imageType} name={iconViewInfos[7].name} />
          <IconView imageType={iconViewInfos[8].imageType} name={iconViewInfos[8].name} /> */}
        </div>
      </div>
    </div>
  )
}

export default SkillView
