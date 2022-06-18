import React from "react";
import {
  Navigation,
  Footer,
  Button,
  FAQCategories,
  InformationSection,
} from "../../ComponentIndex";

import styles from "./HelpPortalTemplate.module.scss";

const HelpPortalTemplate = ({ faqData, information }) => {
  return (
    <>
      <Navigation />
      <div className={styles["help-portal"]}>
        <section className={styles["help-portal__hero"]}>
          <h1 className={styles["hero__welcome"] + " container"}>
            Welcome to the <span>HELP PORTAL</span>
          </h1>
          <p className="container">
            The SAMAHAN Help Portal aims to assist the student with the
            different academic-related processes online. It will answer
            frequently asked questions (FAQs) and respond to student concerns
            that deal with online transactions.
          </p>
          <p>#SAMAHANHelpPortal</p>
          <p>
            Tweet us: @addusamahan
            <br />
            Email us: samahan@addu.edu.ph
          </p>
        </section>
        <section className={styles["help-portal__guidebook"]}>
          <div className={styles["guidebook-wrapper"] + " container"}>
            <div className={styles["guidebook"]}>
              <img
                loading="lazy"
                src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2Fguidebook.png?alt=media&token=5a320c7d-d038-47eb-b1db-bd3bf5d2e271"
                alt="SAMAHAN Guidebook"
                draggable={false}
              />
            </div>
            <div className={styles["download-area"]}>
              <div className={styles["prompt"]}>
                <h2>SAMAHAN GUIDEBOOK</h2>
                <p>A start-up kit for incoming first year students</p>
              </div>
              <Button
                label="DOWNLOAD"
                href={
                  "https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/samahan-guidebook.pdf?alt=media&token=3a86ac03-448e-4e1a-b934-a2bc60a7d13b"
                }
              />
            </div>
          </div>
        </section>
        <InformationSection information={information} />
        <section className={styles["help-portal__FAQ"]}>
          <h2>Frequently Asked Questions (FAQs)</h2>
          <div className={styles["category-area"]}>
            <h3>What can we help with?</h3>
            <FAQCategories categories={faqData.categories} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HelpPortalTemplate;
