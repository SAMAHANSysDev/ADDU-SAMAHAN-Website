import React from 'react'
import { GimmicksButton, AfyopGimmickSection } from "../../ComponentIndex";
import styles from "./AFYOPGimmicks.module.scss";
const AFYOPGimmicks = ({firstP, secondP, thirdP, fHeading, sHeading, tHeading , fPicture,sPicture,tPicture}) => {
  return (
    <div className={styles["background"]}>
      <div className={styles["outerContainer"]}>
        <div className={styles["container"]}>
        <div className={styles["section"]}>

       <AfyopGimmickSection 
       text= {firstP}
       heading = {fHeading}
       pic = {fPicture}
       />
       
        <a href=" https://tinyurl.com/AFYOPSimulaStart-upKit ">
       <GimmicksButton 
       title = "CLICK TO VIEW"
       variant='default'
       />
       </a>
       </div>

       <div className={styles["section"]}>
       <AfyopGimmickSection 
       text={secondP}
       heading = {sHeading}
       pic = {sPicture}
       />
       <a href="https://tinyurl.com/AFYOPSimulaScrapbook  ">
       

       <GimmicksButton 
       title = "CLICK TO VIEW"
       variant='default'
       />
       </a>
       </div>

       <div className={styles["section"]}>
       <AfyopGimmickSection 
       text={thirdP}
       heading = {tHeading}
       pic = {tPicture}
       />
       <a href="https://tinyurl.com/AFYOPLateNights ">
       <GimmicksButton 
       title = "JOIN DISCORD SERVER"
       variant='default'
       />
       </a>
       </div>
       </div>
       </div>
    </div>
  )
}

export default AFYOPGimmicks