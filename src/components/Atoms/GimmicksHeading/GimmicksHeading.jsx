import React from 'react'
import styles from './GimmicksHeading.module.scss'
const GimmicksHeading = ({heading}) => {
  return (
    <div>
        <div className={styles["outerContainer"]}>
        <span className={styles["label"]}>{heading}</span>
        </div>
    </div>
  )
}

export default GimmicksHeading