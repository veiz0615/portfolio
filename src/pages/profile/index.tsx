import MainLayout from '@/components/MainLayout/MainLayout'
import styles from './index.module.css'
import clsx from 'clsx'
import { notoSansJp700, lora700 } from '../../../constants/font'
import VeizImage from '../../../assets/veizImage.jpg'

export default function Profile() {
  return (
    <div className={styles.root}>
      <div className={clsx(styles.title, lora700.className)}>MY PROFILE</div>
      <div className={clsx(styles.heading, notoSansJp700.className)}>自己紹介</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.aboutMe}>
            <div className={styles.textTitle}>・ABOUT ME</div>
            <div className={styles.text}>
              　私の名前は米津徳人（よねづのりひと）と言います。大学に入学した際、先輩が米津を「べいつ」と読み間違い、そこから転じて「ヴェイツ」となりました。
              <br />
              　とあるWebサイトの強いメッセージ性に惹かれ、Webエンジニアになることを志しました。
            </div>
          </div>
          <div className={styles.future}>
            <div className={styles.textTitle}>・FUTURE VISION</div>
            <div className={styles.text}>
              　なりたいエンジニア像としては、Webページを作ることが目的ではなく、私が作るWebページで誰かの願いが達成されるというものです。
              <br />
              　私が作ったWebページを見てお客様が増えた、受注が増えた、誰かが笑顔になった、というような、ITという技術を通して誰かを幸せにすることが私の究極的な願いです。
              <br />
              　また、現在はフロントエンドエンジニアとして活動しておりますが、バックエンド側の知識も開発には必要と感じております。PHPやNode.jsを学び、フルスタックエンジニアを目指します。
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image} />
          <div className={styles.text}>
            1995年6月15日生まれ
            <br />
            信州大学理学部数学科卒業
            <br />
            趣味 : バスケットボール、バンド活動
          </div>
        </div>
      </div>
    </div>
  )
}

Profile.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
