import MainLayout from '@/components/MainLayout/MainLayout'
import styles from './index.module.css'
import { useRef, useState } from 'react'
import Link from 'next/link'
import { lora700, notoSansJp700 } from '../../../constants/font'
import clsx from 'clsx'

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // console.log("メール送信");
    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    }

    await fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log('メール送信成功')
    })
    setIsChecked(true)
  }

  return (
    <div>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={clsx(styles.title, lora700.className)}>CONTACT</div>
          <div className={clsx(styles.heading, notoSansJp700.className)}>Veizへのお問い合わせ</div>
          {isChecked ? (
            <div className={styles.modalArea}>
              <div className={styles.modalText}>メールを送信しました</div>
              <Link href={'/'} legacyBehavior>
                <button className={styles.modalBtn}>ホームに戻る</button>
              </Link>
            </div>
          ) : (
            <form
              className={styles.formArea}
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
            >
              <div className={styles.area}>
                <label className={styles.label}>お名前</label>
                <input type="text" className={styles.input} id="name" ref={nameRef} required />
              </div>
              <div className={styles.area}>
                <label className={styles.label}>メールアドレス</label>
                <input type="email" className={styles.input} id="email" ref={emailRef} required />
              </div>
              <div className={styles.area}>
                <label className={styles.label}>お問い合わせ内容</label>
                <textarea className={styles.textArea} id="message" ref={messageRef} required />
              </div>
              <button type="submit" className={styles.submitBtn}>
                メール送信
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
