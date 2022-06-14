import React from "react";

import styles from "./AFYOPContainer.module.scss";
import { AFYOPLabel } from "../../ComponentIndex";

const AFYOPContainer = ({ title, variant = "default", children }) => {

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["AFYOPContainer"]}>
        <div className={styles["AFYOPContainer__label"]}>
          <AFYOPLabel title={title} variant={variant} />
        </div>
        <div className={styles["AFYOPContainer__bubble"]}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AFYOPContainer;
