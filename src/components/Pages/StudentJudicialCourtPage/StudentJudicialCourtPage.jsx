import React from "react";
import { StudentJudicialCourtTemplate } from "../../ComponentIndex";
import { sjcInData } from "../../../data/dataIndex";

const StudentJudicialCourt = ({ id, initialRoute }) => {
  return (
    <>
      <StudentJudicialCourtTemplate
        id={id}
        data={sjcInData}
        initialRoute={initialRoute}
      />
    </>
  );
};

export default StudentJudicialCourt;
