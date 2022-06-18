import React from "react";
import { OfficeOfTheTreasurerPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const office_of_the_treasurer = () => {
  return (
    <>
      <Head>
        <title key="title">Office of the Treasurer / SAMAHAN</title>
      </Head>
      <OfficeOfTheTreasurerPage id="" initialRoute="/office_of_the_treasurer" />
    </>
  );
};

export default office_of_the_treasurer;
