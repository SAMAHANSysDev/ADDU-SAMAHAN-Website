import React from "react";
import { OfficesAndDepartmentPages } from "../src/components/ComponentIndex";
import Head from "next/head";

const budget_tracker_offices_and_department = () => {
  return (
    <>
      <Head>
        <title key="title">Office and Departments Budget Tracker</title>
      </Head>
      <OfficesAndDepartmentPages />
    </>
  );
};

export default budget_tracker_offices_and_department;
