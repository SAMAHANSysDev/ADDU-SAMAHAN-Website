import React from "react";
import styles from "./Office.module.scss";
import { Officer } from "../../ComponentIndex";

const Office = ({ officeTitle, officers }) => {
  return (
    <>
      <div className={styles["componentContainer"]}>
        <div className={styles["officeTitle"]}>
          <span>{officeTitle}</span>
        </div>
        <div className={styles["officersContainer"]}>
          {officers.map((officer, index) => (
            <div key={index} className={styles["officerContainer"]}>
              <Officer
                key={index}
                name={officer.name}
                position={officer.position}
                imageSrc={officer.imageSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Office;
