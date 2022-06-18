import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  InitiativeList,
  InitiativeModal,
  InitiativeHeader,
  InitiativeOfficeDescription,
} from "../../ComponentIndex";
import styles from "./OfficeInitiative.module.scss";

const OfficeInitiative = ({ id, data, initialRoute }) => {
  const imageHasLoaded = true;
  return (
    <>
      <InitiativeHeader mainTitle={data.mainTitle} subTitle={data.subTitle} />
      <InitiativeOfficeDescription description={data.description} />
      <div className={styles["root-container"]}>
        <div className={styles["component-container"]}>
          <InitiativeList
            selectedId={id}
            data={data.initiatives}
            initialRoute={initialRoute}
          />
          <AnimatePresence>
            {id && imageHasLoaded && (
              <InitiativeModal
                id={id}
                data={data.initiatives}
                initialRoute={initialRoute}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default OfficeInitiative;
