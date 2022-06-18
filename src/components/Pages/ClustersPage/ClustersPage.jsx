import React from "react";
import { Navigation, Footer } from "../../ComponentIndex";
import styles from "./ClusterPage.module.scss";

const ClustersPages = () => {
  return (
    <>
      <Navigation />
      <div className={styles["component-container"]}>
        <div className={styles["flex-container"] + " container"}>
          <iframe
            width="53.9%"
            height="1875px"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=182982560&amp;single=true&amp;widget=true&amp;headers=false&wdHideGridlines=True&range=A1:L84"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ClustersPages;
