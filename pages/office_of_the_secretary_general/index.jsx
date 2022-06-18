import React from "react";
import { OfficeOfTheSecretaryGeneralPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const office_of_the_secretary_general = () => {
  return (
    <>
      <Head>
        <title key="title">Office of the Secretary General / SAMAHAN</title>
      </Head>
      <OfficeOfTheSecretaryGeneralPage
        id=""
        initialRoute="/office_of_the_secretary_general"
      />
    </>
  );
};

export default office_of_the_secretary_general;
