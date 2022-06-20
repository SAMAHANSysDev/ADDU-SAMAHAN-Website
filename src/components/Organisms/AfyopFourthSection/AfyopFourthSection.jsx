import React, { useEffect } from 'react'
import styles from "./AfyopFourthSection.module.scss";
import { AFYOPContainer, ClassFinderSteps, NowHappeningContent } from '../../ComponentIndex';

const AfyopFourthSection = ({variant, content, content2}) => {


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
                    <ClassFinderSteps
                      epThumbnail={episode.thumbnail}
                      epTitle={episode.title}
                      epDescription={episode.description}
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
      <AFYOPContainer title={"CLASS FINDER"}>
            <div className={styles["ClassFinderPics"]}>
              {content.map((step) => {
                return (
                  <React.Fragment key={step.title}>
                    <ClassFinderSteps
                      epThumbnail={step.pic}
                      epTitle={step.title}
                      epDescription={step.text}
                    />
                  </React.Fragment>
                );
              })}
            </div>
          </AFYOPContainer>
      </div>

      {
          /* NOW HAPPENING */
        }

      <div className={styles["grid-container-2"]}>
      <AFYOPContainer title={"NOW HAPPENING"}>
        <div className={styles["ClassFinderPics"]}>
                {content2.map((item) => {
                  return (
                    <React.Fragment key={item.DateTime}>
                      <NowHappeningContent
                        time={item.DateTime}
                        event={item.event}
                        platform={item.platform}
                        description={item.desc}
                      />
                    </React.Fragment>
                  );
                })}
              </div>
      </AFYOPContainer>
      </div>
      </>
    )
  }
  return (
    <div className={styles["AFYOPFeedSection"]}>
    <section className={styles["AFYOPFeedSection__content"] + " container"}>
        {variant === "Now Happening" ? RenderClassFinderNowHappening() : RenderSimulaTVTwitter()}
    </section>
  </div>
  )
}

export default AfyopFourthSection