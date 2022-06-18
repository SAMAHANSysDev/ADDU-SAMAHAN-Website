import React from "react";
import { SummaryPage } from "../src/components/ComponentIndex";
import Head from "next/head";

const budget_tracker_summary = () => {
  return (
    <>
      <Head>
        <title key="title">Summary Budget Tracker</title>
      </Head>
      <SummaryPage />
    </>
  );
};

export default budget_tracker_summary;
