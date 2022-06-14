import React from 'react'
import styles from "./AfyopFourthSection.module.scss";
import { AFYOPContainer } from '../../ComponentIndex';

const AfyopFourthSection = ({title, variant = "default", children, data}) => {
  return (
    <>
    <div className={styles["component-container"]}>
    <div className={styles["grid-container"]}>
    <div className="container">
    <AFYOPContainer title={title="Class Finder"} variant={variant} children={children}/>
    </div>

    <div className="container">
    <AFYOPContainer title={title="Now Happening"} variant={variant} children={children}/>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default AfyopFourthSection