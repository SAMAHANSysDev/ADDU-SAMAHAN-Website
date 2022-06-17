import React from "react";

import styles from "./AFYOPFeedSection.module.scss";
import { AFYOPContainer, SimulaTVEP } from "../../ComponentIndex";

const AFYOPFeedSection = ({ variant, content }) => {
  function RenderSimulaTVTwitter() {
    {
      /* FOR SIMULA TV ADN TWITTER FEED SECTION */
    }
    return (
      <>
        <div className={styles["grid-container-1"]}>
          <AFYOPContainer title={"SIMULA TV"}>
            <div className={styles["SimulaTVEpisodes"]}>
              {content.map((episode) => {
                return (
                  <React.Fragment key={episode.title}>
                    <SimulaTVEP
                      epThumbnail={episode.thumbnail}
                      epTitle={episode.title}
                      epDescription={episode.description}
                      epCaption={episode.caption}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </AFYOPContainer>
        </div>
    
        {
          /* TWITTER FEED */
        }
        <div className={styles["grid-container-2"]}>
          <AFYOPContainer title={"Twitter Feed"}></AFYOPContainer>
        </div>
      </>
    )
  }

  function RenderClassFinderNowHappening() {
    return (
      <>
      <div className={styles["grid-container-1"]}>
        {/* CODE HERE */}
      </div>
      <div className={styles["grid-container-2"]}>
        {/* CODE HERE */}
      </div>
      </>
    )
  }

  return (
    <div className={styles["AFYOPFeedSection"]}>
      <section className={styles["AFYOPFeedSection__content"] + " container"}>
          {variant === "SimulaTVTwitter" ? RenderSimulaTVTwitter() : RenderClassFinderNowHappening()}
      </section>
    </div>
  );
};

export default AFYOPFeedSection;
