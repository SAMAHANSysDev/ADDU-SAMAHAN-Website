import React from 'react'

import styles from './AFYOPButton.module.scss';

const AFYOPButton = ({ label, variant = "default" }) => {

  return (
    <button type='button' className={styles["AFYOPButton"] + " " + styles[`AFYOPButton--${variant}`]}>{label}</button>
  )
}

export default AFYOPButton