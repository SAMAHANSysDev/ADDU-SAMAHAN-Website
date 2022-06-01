import * as React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Tabpanel.module.scss";
import { textAlign } from "@mui/system";
import Flip from "react-reveal/Flip";

export default function TabPanel(props) {
  const { children, value, index, subHeading } = props;

  return (
    <div className={styles["innerBox"]}>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
      >
        {value === index && (
          <div className={styles["box"]}>
            <Flip bottom>
              <div className={styles["subHeading"]}>
              <h2 >{subHeading}</h2>
              
              <Typography variant = "h6" color = "common.white">{children}</Typography>
              </div>
            </Flip>
          </div>
        )}
      </div>
    </div>
  );
}
