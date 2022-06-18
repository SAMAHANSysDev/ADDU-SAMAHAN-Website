import React from "react";
import styles from "./SummaryPage.module.scss";
import { Navigation, Footer } from "../../ComponentIndex";

const SummaryPage = () => {
  return (
    <>
      <Navigation />
      <div className={styles["component-container"]}>
        <div className={styles["flex-container"] + " container"}>
          <iframe
            width="69%"
            height="2337x"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=1677787958&amp;single=true&amp;widget=true&amp;headers=false&wdHideGridlines=True&range=A1:M107"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SummaryPage;
