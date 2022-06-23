import React from 'react'
import { GimmicksHeading } from "../../ComponentIndex";
import styles from "./AfyopGimmickSection.module.scss";
const AfyopGimmickSection = ({text}) => {
  return (
    <div className={styles["container"]}>
     <GimmicksHeading heading = "LOREM IPSUM"/>
        <p className={styles["paragraph"]}>{text}</p>
        
    </div>
  )
}

export default AfyopGimmickSection