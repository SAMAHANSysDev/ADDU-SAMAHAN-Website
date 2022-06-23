import React from "react";

import styles from "./Facilitators.module.scss";
import { Facilitator } from "../../ComponentIndex";

const Facilitators = ({ facilitators }) => {
  return (
    <div className={styles["Facilitators"]}>
      {facilitators.map((facilitator) => {
        if (facilitator.picture == "") {
          console.log("CAN'T FIND IMAGE FOR: " + facilitator.name)
        }

        return (
          <Facilitator
            key={facilitator.name}
            name={facilitator.name}
            position={facilitator.position}
            socials={facilitator.socials}
            image={facilitator.picture}
            classes={facilitator.classes}
          />
        );
      })}
    </div>
  );
};

export default Facilitators;
