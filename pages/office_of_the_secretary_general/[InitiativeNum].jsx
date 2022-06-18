import { useRouter } from "next/router";
import React from "react";
import { OfficeOfTheSecretaryGeneralPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <OfficeOfTheSecretaryGeneralPage
      id={InitiativeNum}
      initialRoute="/office_of_the_secretary_general"
    />
  );
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { InitiativeNum: "initiative_1" } },
      { params: { InitiativeNum: "initiative_2" } },
      { params: { InitiativeNum: "initiative_3" } },
    ],
    fallback: false,
  };
}

export default InitiativeNum;
