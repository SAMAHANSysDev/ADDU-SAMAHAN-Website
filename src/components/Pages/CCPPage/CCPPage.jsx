import React from "react";
import { Navigation, Footer } from "../../ComponentIndex";
import styles from "./CCPPage.module.scss";

const CCPPages = () => {
  return (
    <>
      <Navigation />
      <div className={styles["component-container"]}>
        <div className={styles["flex-container"] + " container"}>
          <iframe
            width="56.3%"
            height="1047px"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=1208793427&amp;single=true&amp;widget=true&amp;headers=false&wdHideGridlines=True&range=A1:M51"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CCPPages;
