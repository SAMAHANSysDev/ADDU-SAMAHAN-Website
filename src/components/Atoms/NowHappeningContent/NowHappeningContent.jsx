import React from 'react'
import styles from "./NowHappeningContent.module.scss";

const NowHappeningContent = ({ time, event, platform , description }) => {
  return (
    <div className={styles["SimulaTVEP"]}>
      {/* <Image.default
        src={epThumbnail}
        objectFit="contain"
        layout="fill"
        alt={`${epTitle}'s thumbnail`}
      /> */}
       {/* <p className={styles["smallTitle"]}>{time}</p> */}

      <div className={styles["details"]}>
        <h4>{time}</h4>
        <h2>{event}</h2>
        <h3>{platform}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NowHappeningContent