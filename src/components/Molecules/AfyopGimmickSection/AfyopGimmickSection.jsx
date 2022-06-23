import React from 'react'
import { GimmicksHeading, GimmicksButton } from "../../ComponentIndex";
import styles from "./AfyopGimmickSection.module.scss";


const AfyopGimmickSection = ({text , heading}) => {

  return (
    <div className={styles["container"]}>
     
     <GimmicksHeading heading = {heading}/>
     
     
     <p className={styles["paragraph"]}>{text}</p>
        
        
    </div>
  )
}


export default AfyopGimmickSection