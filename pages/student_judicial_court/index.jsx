import React from "react";
import { StudentJudicialCourtPage } from "../../src/components/ComponentIndex";
import Head from "next/head";

const student_judicial_court = () => {
  return (
    <>
      <Head>
        <title key="title">Student Judicial Court / SAMAHAN</title>
      </Head>
      <StudentJudicialCourtPage id="" initialRoute="/student_judicial_court" />
    </>
  );
};

export default student_judicial_court;
