import { useState, useEffect } from "react";
import Image from "next/image";
import { Footer, Navigation } from "../../ComponentIndex";
import Fade from "react-reveal/Fade";
import styles from "./LandingPage.module.scss";
import { image } from "../../../data/dataIndex";

const Landing = () => {
  return (
    <>
      <Navigation transparent={true} />
      <section className={styles["landing"]}>
        <div className={styles["hero"] + " container"}>
          <Fade top>
            <div className={styles["hero__slogan"]}>
              <Image.default
                src={image.hereAndNow}
                alt="Here and Now"
                layout="fill"
                objectFit="contain"
                draggable="false"
                className={styles["HereAndNow__img"]}
                priority
              />
            </div>
          </Fade>
          <div className={styles["homepage"]}>
            <Fade left>
              <div className={styles["homepage__define"]}>
                <div className={styles["word"]}>
                  <h1>
                    <strong>here</strong>
                  </h1>
                  <p>(adv.)</p>
                </div>
                <p>to make known one{"'"}s existence</p>
              </div>
            </Fade>
            <Fade right>
              <div className={styles["homepage__define"]}>
                <div className={styles["word"]}>
                  <h1>
                    <strong>and</strong>
                  </h1>
                  <p>(conj.)</p>
                </div>
                <p>a connecting word</p>
              </div>
            </Fade>
            <Fade left>
              <div className={styles["homepage__define"]}>
                <div className={styles["word"]}>
                  <h1>
                    <strong>now</strong>
                  </h1>
                  <p>(adv.)</p>
                </div>
                <p>at the present time or moment</p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;
