import React from "react";

import styles from "./AFYOPContainer.module.scss";
import { AFYOPLabel } from "../../ComponentIndex";

const AFYOPContainer = ({ label, content }) => {
  return (
    <div className={styles["AFYOPContainer"]}>
      <div className={styles["AFYOPContainer__label"]}>
        <AFYOPLabel title={label.title} variant={label.variant} />
      </div>
      <div className={styles["AFYOPContainer__bubble"]}>
        {content}
      </div>
    </div>
  );
};

export default AFYOPContainer;
