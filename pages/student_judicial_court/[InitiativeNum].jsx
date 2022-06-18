import { useRouter } from "next/router";
import React from "react";
import { StudentJudicialCourtPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <StudentJudicialCourtPage
      id={InitiativeNum}
      initialRoute="/student_judicial_court"
    />
  );
};

export default InitiativeNum;
