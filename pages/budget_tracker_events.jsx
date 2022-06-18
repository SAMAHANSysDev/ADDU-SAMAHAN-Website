import React from "react";
import { EventsPage } from "../src/components/ComponentIndex";
import Head from "next/head";

const budget_tracker_events = () => {
  return (
    <>
      <Head>
        <title key="title">Events Budget Tracker</title>
      </Head>
      <EventsPage />
    </>
  );
};

export default budget_tracker_events;
