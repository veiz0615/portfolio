import { FC } from "react";
import styles from "./TopView.module.css";

type Props = {};

const TopView: FC<Props> = () => {
  return (
    <div className="root">
      <h1>Welcome to Veiz.Code</h1>
      <p>このページはNext.jsで作成しています</p>
    </div>
  );
};

export default TopView;
