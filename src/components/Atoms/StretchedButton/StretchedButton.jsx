import { forwardRef } from "react";
import styles from "./StretchedButton.module.scss";

const StretchedButton = forwardRef(({ onClick, href, label }, ref) => {
  return (
    <div className={styles["button"]}>
      <a
        className={styles["buttonStyle"]}
        href={href}
        onClick={onClick}
        ref={ref}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles["buttonLabel"]}>{label}</span>
      </a>
    </div>
  );
});

StretchedButton.displayName = "Stretched_Button";

export default StretchedButton;
