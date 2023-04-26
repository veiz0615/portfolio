import Link from "next/link";
import styles from "./Header.module.css";
import { FC } from "react";

type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className={styles.root}>
      <Link href={"/"} legacyBehavior>
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
    </div>
  );
};

export default Header;
