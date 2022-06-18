import React from "react";
import { Navigation, Footer } from "../../ComponentIndex";
import styles from "./EventsPage.module.scss";

const EventsPage = () => {
  return (
    <>
      <Navigation />
      <div className={styles["component-container"]}>
        <div className={styles["flex-container"] + " container"}>
          <iframe
            width="58%"
            height="1180px"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRopiweIMRKkRiGglXv3PmlnKI5FhwgmZ9zyfAwfSRqaLOcZ5ihs64gOGgm00HWWlTNOJMGH8jCTXGM/pubhtml?gid=2039256651&amp;single=true&amp;widget=true&amp;headers=false&amp;wdHideGridlines=True&range=A1:M58"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;
