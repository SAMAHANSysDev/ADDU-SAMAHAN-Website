import React from "react";

import { AFYOPTemplate } from "../../ComponentIndex";
import { AFYOPSimulaTV, FaciFinder, GimmicksData, GimmicksHeading } from "../../../data/dataIndex";

const AFYOPPage = () => {
  return (
    <>
      <AFYOPTemplate
        SimulaTVContent={AFYOPSimulaTV.SimulaTVTwitter}
        facilitators={FaciFinder.facilitators}
    firstP= {GimmicksData.firstP}
    secondP= {GimmicksData.secondP}
    thirdP= {GimmicksData.thirdP}
    fHeading= {GimmicksHeading.fHeading}
    sHeading= {GimmicksHeading.sHeading}
    tHeading= {GimmicksHeading.tHeading}
      />
    </>
  );
};

export default AFYOPPage;
