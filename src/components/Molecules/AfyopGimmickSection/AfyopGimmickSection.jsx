import React from 'react'
import { GimmicksHeading, GimmicksButton } from "../../ComponentIndex";
import styles from "./AfyopGimmickSection.module.scss";
import Image from 'next/image';

const AfyopGimmickSection = ({text , heading, pic}) => {

  return (
    <div className={styles["outerContainer"]}>

    <Image.default src= {pic}  width={150} height={150} />
     <div className={styles["innerContainer"]}>
     <GimmicksHeading heading = {heading}/>
     <p  className={styles["paragraph"]}>{text}</p>
     </div>
        
        
    </div>
  )
}


export default AfyopGimmickSection