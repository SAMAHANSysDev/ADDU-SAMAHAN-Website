import React from "react";
import Image from "next/image";

import styles from "./SimulaTVEP.module.scss";
import { Icon } from '@iconify/react';
import playFill from '@iconify/icons-bi/play-fill';

const SimulaTVEP = ({ epThumbnail, epTitle, epDescription }) => {
  return (
    <div className={styles["SimulaTVEP"]}>
      {/* <Image.default
        src={epThumbnail}
        objectFit="contain"
        layout="fill"
        alt={`${epTitle}'s thumbnail`}
      /> */}
      <div className={styles["thumbnail"]} style={{backgroundImage: `url(${epThumbnail})`}}>
        <Icon icon={playFill} color="white" height="50" />
        <p className={styles["smallTitle"]}>{epTitle}</p>
      </div>
      <div className={styles["details"]}>
        <h4>{epTitle}</h4>
        <p>{epDescription}</p>
      </div>
    </div>
  );
};

export default SimulaTVEP;
