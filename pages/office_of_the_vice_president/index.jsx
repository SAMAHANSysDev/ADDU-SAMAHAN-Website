import React from "react";
import { OfficeOfTheVicePresidentPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const office_of_the_vice_president = () => {
  return (
    <>
      <Head>
        <title key="title">Office of the Vice President / SAMAHAN</title>
      </Head>
      <OfficeOfTheVicePresidentPage
        id=""
        initialRoute="/office_of_the_vice_president"
      />
    </>
  );
};

export default office_of_the_vice_president;
