import React from "react";
import { CCPPage } from "../src/components/ComponentIndex";
import Head from "next/head";

const budget_tracker_ccp = () => {
  return (
    <>
      <Head>
        <title key="title">CCP Budget Tracker</title>
      </Head>
      <CCPPage />
    </>
  );
};

export default budget_tracker_ccp;
