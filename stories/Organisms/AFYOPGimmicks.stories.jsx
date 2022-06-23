import { AFYOPGimmicks } from "../../src/components/ComponentIndex";
import { GimmicksData, GimmicksHeading } from "../../src/sampleData/dataIndex";

export default {
  title: "Organisms/AFYOP Gimmicks",
  component: AFYOPGimmicks,
};

export const Basic = {
  args: {
   
    firstP: GimmicksData.firstP,
    secondP: GimmicksData.secondP,
    thirdP: GimmicksData.thirdP,
    fHeading: GimmicksHeading.fHeading,
    sHeading: GimmicksHeading.sHeading,
    tHeading: GimmicksHeading.tHeading
  },
};