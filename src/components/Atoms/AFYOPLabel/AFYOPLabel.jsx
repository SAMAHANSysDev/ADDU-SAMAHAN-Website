import React from 'react'

import styles from './AFYOPLabel.module.scss'

const AFYOPLabel = ({ label, variant = "default" }) => {
  return (
    <div className={styles["AFYOPLabel"] + " " + styles[`AFYOPLabel--${variant}`]}>
        {label}
    </div>
  )
}

export default AFYOPLabel