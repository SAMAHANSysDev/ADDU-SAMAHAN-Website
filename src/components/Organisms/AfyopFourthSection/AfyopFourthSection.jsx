import React from 'react'
import styles from "./AfyopFourthSection.module.scss";
import { AFYOPContainer } from '../../ComponentIndex';

const AfyopFourthSection = ({title="Class Finder", variant = "default", children, data}) => {
  return (
    <>
    <div className={styles["component-container"]}>
    <div className="container">
    <AFYOPContainer title={title} variant={variant} children={children}/>
    </div>
    </div>
    </>
  )
}

export default AfyopFourthSection