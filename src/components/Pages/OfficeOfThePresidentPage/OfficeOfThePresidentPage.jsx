import React from "react";
import { OfficeOfThePresidentTemplate } from "../../ComponentIndex";
import { pInData } from "../../../data/dataIndex";

const OfficeOfThePresident = ({ id, initialRoute }) => {
  return (
    <>
      <OfficeOfThePresidentTemplate
        id={id}
        data={pInData}
        initialRoute={initialRoute}
      />
    </>
  );
};

export default OfficeOfThePresident;
