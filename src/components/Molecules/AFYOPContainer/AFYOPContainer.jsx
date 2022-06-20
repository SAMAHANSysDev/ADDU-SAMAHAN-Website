import React from "react";

import styles from "./AFYOPContainer.module.scss";
import { AFYOPLabel } from "../../ComponentIndex";

const AFYOPContainer = ({ title, variant = "default", type, children }) => {

  return (
    <div className={styles["AFYOPContainer"]}>
      <div className={styles["AFYOPContainer__label"]}>
        <AFYOPLabel title={title} variant={variant} />
      </div>
      <div className={[styles["AFYOPContainer__bubble"], (type==="twitterFeed") ? styles["twitter"] : ""].join(' ')}>
        {children}
      </div>
    </div>
  );
};

export default AFYOPContainer;
