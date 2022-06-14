import React from 'react'

import styles from './AFYOPLabel.module.scss'

const AFYOPLabel = ({ title, variant = "default" }) => {
  return (
    <div className={styles["AFYOPLabel"] + " " + styles[`AFYOPLabel--${variant}`]}>
        {title}
    </div>
  )
}

export default AFYOPLabel