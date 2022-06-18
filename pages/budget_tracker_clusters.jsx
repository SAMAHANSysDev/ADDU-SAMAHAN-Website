import React from "react";
import { ClustersPage } from "../src/components/ComponentIndex";
import Head from "next/head";

const budget_tracker_clusters = () => {
  return (
    <>
      <Head>
        <title key="title">Clusters Budget Tracker</title>
      </Head>
      <ClustersPage />
    </>
  );
};

export default budget_tracker_clusters;
