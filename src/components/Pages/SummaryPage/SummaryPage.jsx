import React from "react";
import styles from "./SummaryPage.module.scss";

const SummaryPage = () => {
  return (
    <>
      <div className={styles["component-container"]}>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=1677787958&amp;single=true&amp;widget=true&amp;headers=false&wdHideGridlines=True&range=A1:M107"></iframe>
      </div>
    </>
  );
};

export default SummaryPage;
