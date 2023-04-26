import React, { FC, ReactNode } from "react";

import Header from "../Header/Header";
import styles from "./MainLayout.module.css";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.contents}>{children}</div>
    </div>
  );
};

export default MainLayout;
