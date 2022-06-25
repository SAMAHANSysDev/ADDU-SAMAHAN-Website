import React from "react";

import { AFYOPTemplate } from "../../ComponentIndex";
import { AFYOPSimulaTV, FaciFinder, GimmicksData, GimmicksHeading,AFYOPcarouselcontent,AFYOPGimmicksPics } from "../../../data/dataIndex";

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
    carcon = {AFYOPcarouselcontent}
    fPicture= {AFYOPGimmicksPics.fPic}
    sPicture= {AFYOPGimmicksPics.tPic}
    tPicture= {AFYOPGimmicksPics.sPic}
      />
    </>
  );
};

export default AFYOPPage;
