import React from "react";
import Image from "next/image";
import { Footer, Navigation } from "../../ComponentIndex";
import Fade from "react-reveal/Fade";
import styles from "./LandingPage.module.scss";
import { image } from "../../../data/dataIndex";
import Link from 'next/link'

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
      <div className={styles["SimulaNotice"]}>
        <div className="container">
          <h1>Psst! A freshie?</h1>
          <p>Scroll down!</p>
        </div>
      </div>
      <Link href="/afyop">
        <section className={styles["SimulaLanding"]}>
          <div className={styles["background"]}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FSimulaLandingBG.png?alt=media&token=e3a95bae-5196-4e80-9240-f255a0d68881"} 
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="Simula Webpage Background"
            />
          </div>
          <div className={styles["SimulaLogo"]}>
            <Image src={"https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FSimulaLogoType--white.png?alt=media&token=ddf9a88f-1f38-41a5-8a39-0ae2a5be221f"} 
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              alt="Simula Logo"
            />
          </div>
          <h1>OPEN THE PORTAL</h1>
        </section>
      </Link>
      <Footer />
    </>
  );
};

export default Landing;
