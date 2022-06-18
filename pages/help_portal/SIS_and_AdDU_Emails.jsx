import React from "react";
import { EmailFAQPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const SIS_and_AdDU_Emails = () => {
  return (
    <>
      <Head>
        <title key="title">FAQs - SIS and AdDU Emails</title>
      </Head>
      <EmailFAQPage />
    </>
  );
};

export default SIS_and_AdDU_Emails;
