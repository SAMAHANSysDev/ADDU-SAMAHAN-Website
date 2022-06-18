import React from "react";
import { AboutPage } from "../src/components/ComponentIndex";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />
        <title key="title">About / SAMAHAN</title>
      </Head>
      <AboutPage />
    </>
  );
};

export default About;
