import React from "react";
import { HelpPortalPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const help_portal = () => {
  return (
    <>
      <Head>
        <title key="title">Help Portal / SAMAHAN</title>
      </Head>
      <HelpPortalPage />
    </>
  );
};

export default help_portal;
