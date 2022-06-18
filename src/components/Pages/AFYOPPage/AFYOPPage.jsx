import React from "react";

import { AFYOPTemplate } from "../../ComponentIndex";
import { AFYOPSimulaTV, FaciFinder } from "../../../data/dataIndex";

const AFYOPPage = () => {
  return (
    <>
      <AFYOPTemplate
        SimulaTVContent={AFYOPSimulaTV.SimulaTVTwitter}
        facilitators={FaciFinder.facilitators}
      />
    </>
  );
};

export default AFYOPPage;
