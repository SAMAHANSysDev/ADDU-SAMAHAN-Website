import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import styles from "./Twitterembed.module.scss";
const Twitterembed = ({srcType,scrName}) => {
  return (
    <div> 
    <div className={styles["outerContainer"]}>
    <TwitterTimelineEmbed
    sourceType={srcType}
    screenName={scrName}
    options={{height: 600, width: 600}}
  />
  </div>
  </div>
  )
}

export default Twitterembed