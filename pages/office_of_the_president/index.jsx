import React from "react";
import { OfficeOfThePresidentPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const office_of_the_president = () => {
  return (
    <>
      <Head>
        <title key="title">Office of the President / SAMAHAN</title>
      </Head>
      <OfficeOfThePresidentPage id="" initialRoute="/office_of_the_president" />
    </>
  );
};

export default office_of_the_president;
