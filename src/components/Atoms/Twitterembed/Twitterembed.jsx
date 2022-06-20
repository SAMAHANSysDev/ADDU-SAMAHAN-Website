import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import styles from "./Twitterembed.module.scss";
const Twitterembed = ({ srcType, scrName }) => {

  
  return (
    <div className={styles["outerContainer"]}>
      <TwitterTimelineEmbed
        sourceType={srcType}
        screenName={scrName}
        options={{ height: "100%", width: "100%" }}
      />
    </div>
);
};

export default Twitterembed;
