import MainLayout from "@/components/MainLayout/MainLayout";
import styles from "./index.module.css";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("メール送信");
    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メール送信成功");
    });
    setIsChecked(true);
  };
  return (
    <>
      <div className={styles.root}>
        <div className={styles.container}>
          <div className={styles.title}>CONTACT</div>
          <div className={styles.heading}>Veizへのお問い合わせ</div>
          {isChecked ? (
            <div className={styles.modalArea}>
              <div className={styles.modalText}>メールを送信しました</div>
              <Link href={"/"} legacyBehavior>
                <a className={styles.modalBtn}>ホームに戻る</a>
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                handleSubmit(e)
              }
            >
              <div className="nameArea">
                <label htmlFor="name" className="form-label">
                  お名前
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="emailArea">
                <label htmlFor="email" className="form-label">
                  メールアドレス
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="messageArea">
                <label htmlFor="message" className="form-label">
                  お問い合わせ内容
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  ref={messageRef}
                  required
                />
              </div>
              <button type="submit" className="btn btn-danger">
                メール送信
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
