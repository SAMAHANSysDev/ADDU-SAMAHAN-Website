import React from 'react'
import styles from "./ClassFinderSteps.module.scss";


const ClassFinderSteps = ({epThumbnail, epTitle, epDescription}) => {
  return (
    <div className={styles["SimulaTVEP"]}>
      {/* <Image.default
        src={epThumbnail}
        objectFit="contain"
        layout="fill"
        alt={`${epTitle}'s thumbnail`}
      /> */}
      <div className={styles["thumbnail"]} style={{backgroundImage: `url(${epThumbnail})`}}>
        <p className={styles["smallTitle"]}>{epTitle}</p>
      </div>
      <div className={styles["details"]}>
        <h4>{epTitle}</h4>
        <p>{epDescription}</p>
      </div>
    </div>
  )
}

export default ClassFinderSteps