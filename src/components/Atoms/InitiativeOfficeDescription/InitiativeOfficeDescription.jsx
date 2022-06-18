import React from "react";
import styles from "./InitiativeOfficeDescription.module.scss";

const InitiativeOfficeDescription = ({ description }) => {
  return (
    <header className={styles["component-container"]}>
      <p className={styles["description"]}>{description}</p>
    </header>
  );
};

export default InitiativeOfficeDescription;
