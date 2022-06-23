import React from 'react'
import styles from "./GimmicksButton.module.scss";
const GimmicksButton = ({ title, variant = "default" }) => {
  return (
    <button
    type="button"
    className={
      styles["GimmicksButton"] + " " + styles[`GimmicksButton--${variant}`]
    }
  >
    {title}
  </button>
  )
}

export default GimmicksButton