import Link from 'next/link'
import styles from './Header.module.css'
import { FC, useState } from 'react'

type Props = {}

const Header: FC<Props> = () => {
  const [isOpend, setIsOpend] = useState(false)

  const clickOpen = () => {
    setIsOpend(true)
  }

  const clickClose = () => {
    setIsOpend(false)
  }

  return (
    <div className={styles.root}>
      <Link href={'/'} legacyBehavior>
        <a className={styles.logo}>Veiz.Code</a>
      </Link>

      <div className={styles.right}>
        <Link href="profile" legacyBehavior>
          <a className={styles.link}>PROFILE</a>
        </Link>

        <Link href="skill" legacyBehavior>
          <a className={styles.link}>SKILL</a>
        </Link>

        <Link href="contact" legacyBehavior>
          <a className={styles.link}>CONTACT</a>
        </Link>
      </div>

      <div className={styles.spRight}>
        {isOpend ? (
          <div className={styles.closeIcon} onClick={clickClose}>
            ×
          </div>
        ) : (
          <div className={styles.menuIcon} onClick={clickOpen}>
            MENU
          </div>
        )}
      </div>
      {isOpend ? (
        <div className={styles.spMenu}>
          <div className={styles.area}>
            <Link href="/" legacyBehavior>
              <a className={styles.link} onClick={clickClose}>
                HOME
              </a>
            </Link>
          </div>
          <div className={styles.area}>
            <Link href="profile" legacyBehavior>
              <a className={styles.link} onClick={clickClose}>
                PROFILE
              </a>
            </Link>
          </div>
          <div className={styles.area}>
            <Link href="skill" legacyBehavior>
              <a className={styles.link} onClick={clickClose}>
                SKILL
              </a>
            </Link>
          </div>
          <div className={styles.area}>
            <Link href="contact" legacyBehavior>
              <a className={styles.link} onClick={clickClose}>
                CONTACT
              </a>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header
