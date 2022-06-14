import React from "react";

import styles from "./AFYOPButton.module.scss";

const AFYOPButton = ({ title, variant = "default" }) => {
  return (
    <button
      type="button"
      className={
        styles["AFYOPButton"] + " " + styles[`AFYOPButton--${variant}`]
      }
    >
      {title}
    </button>
  );
};

export default AFYOPButton;
