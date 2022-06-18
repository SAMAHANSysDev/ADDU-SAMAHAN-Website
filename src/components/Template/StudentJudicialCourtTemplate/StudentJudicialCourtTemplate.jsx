import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import styles from "./StudentJudicialCourtTemplate.module.scss";

const StudentJudicialCourtTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <div className={styles["student-judicial-court"]}>
        <Navigation />
        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      </div>
      <Footer />
    </>
  );
};

export default StudentJudicialCourtTemplate;
