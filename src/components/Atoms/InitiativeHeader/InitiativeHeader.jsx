import React from "react";
import styles from "./InitiativeHeader.module.scss";

const InitiativeHeader = ({ mainTitle, subTitle }) => {
  return (
    <header className={styles["component-container"]}>
      <div className="container">
        <p className={styles["subTitle"]}>{subTitle}</p>
        <p className={styles["mainTitle"]}>{mainTitle}</p>
      </div>
    </header>
  );
};

export default InitiativeHeader;
