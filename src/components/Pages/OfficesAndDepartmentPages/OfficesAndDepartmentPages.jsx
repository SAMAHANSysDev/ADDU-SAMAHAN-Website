import styles from "./OfficesAndDepartmentPages.module.scss";
import React from "react";
import { Navigation, Footer } from "../../ComponentIndex";

const OfficesAndDepartmentPages = () => {
  return (
    <>
      <Navigation />
      <div className={styles["component-container"]}>
        <div className={styles["flex-container"] + " container"}>
          <iframe
            width="58.8%"
            height="1850px"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=775631921&amp;single=true&amp;widget=true&amp;headers=false&wdHideGridlines=True&range=A1:M91"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OfficesAndDepartmentPages;
