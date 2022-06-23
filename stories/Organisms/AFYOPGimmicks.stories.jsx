import { AFYOPGimmicks } from "../../src/components/ComponentIndex";
import { GimmicksData } from "../../src/sampleData/dataIndex";

export default {
  title: "Organisms/AFYOP Gimmicks",
  component: AFYOPGimmicks,
};

export const Basic = {
  args: {
    link: "google.com",
    firstP: GimmicksData.firstP,
    secondP: GimmicksData.secondP,
    thirdP: GimmicksData.thirdP,
  },
};