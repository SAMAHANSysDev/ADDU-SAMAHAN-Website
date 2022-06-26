import React from "react";
import styles from "./AFYOPLanding.module.scss";
import Image from "next/image";
import { AFYOPLabel, AFYOPButton } from "../../ComponentIndex";
import useMediaQuery from "@mui/material/useMediaQuery";

const parse = require('html-react-parser');

const AFYOPLanding = ({ AFYOPLandingData }) => {
  const isScreenWidth576px = useMediaQuery("(max-width:576px)");
  return (
    <div className={styles["background"]}>
      <div className={styles["AFYOPLanding"] + " container"}>
        {/* <div className={styles["AFYOP-logo"]}>
          <Image.default
            src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Landing%2FAFYOP%20LOGO.png?alt=media&token=67dba0f5-1d41-4990-be1e-0617d37c4cb9"
            layout="responsive"
            objectFit="cover"
            width="100"
            height="100"
            draggable={false}
          ></Image.default>
        </div>

        <div className={styles["AFYOP-text"]}>
          <Image.default
            src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Landing%2FAFYOP%20TEXT.png?alt=media&token=255a914b-b298-4d97-a8a3-4fa96a598b60"
            layout="responsive"
            objectFit="cover"
            width="100"
            height="15"
            draggable={false}
          ></Image.default>
        </div>

        <div className={styles["AFYOP-simula-logo"]}>
          <Image.default
            src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Landing%2FSIMULA%20LOGO.png?alt=media&token=c0bc1d5b-defc-444e-a5ff-84901dfbe4c5"
            layout="responsive"
            objectFit="cover"
            width="100"
            height="38"
            draggable={false}
            priority
          ></Image.default>
        </div> */}

        <div className={styles["SimulaLogo"]}>
          <Image.default 
          src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FAFYOP%20Landing%2Fsimula-logo-landing.png?alt=media&token=0e1d2133-47da-409f-a0e2-5b430a53574e"
          layout="fill"
          objectFit="contain"
          draggable={false}
          priority
          >

          </Image.default>
        </div>

        <section className={styles["first-year-onboard-section"]}>
          <AFYOPLabel
            title="Ateneo First Year Onboarding Program"
            variant="h5"
          ></AFYOPLabel>
          <div className={styles["dates"]}>
            <p className={styles["first-year-onboard-section--date"]}>
              JUNE 28 - JULY 1, 2022
            </p>
            <p className={styles["italic"]}>Sa simulang babalikan, kuwento’y ating simulan.</p>
          </div>
        </section>

        <section className={styles["body-text-section"]}>
          <div className={styles["intro"]}>
            <p><span className={styles["yellow"]}>Simula</span> (n.)</p>
            <p>origin; start; the beginning of something. </p>
          </div>
          {AFYOPLandingData.bodyText.map((pargraph) => (
            <p key={pargraph}>{parse(pargraph)}</p>
          ))}
        </section>

        <section className={styles["finders-section"]}>
          <div className={styles["class-finder"]}>
            <a href="#ClassFinder">
              <AFYOPButton
                title="CLASS FINDER"
                variant={isScreenWidth576px ? "h3" : "h1"}
              />
            </a>
            <p>Know your class through our detailed steps and procedures of our Simula Class Finder!</p>
          </div>
          <div className={styles["faci-finder"]}>
            <a href="#FaciFinder">
              <AFYOPButton
                title="FACI FINDER"
                variant={isScreenWidth576px ? "h3" : "h1"}
              />
            </a>
            <p>After finding your class, connect with your assigned facilitators through our Simula Faci Finder.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AFYOPLanding;
