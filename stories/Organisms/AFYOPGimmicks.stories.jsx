import { AFYOPGimmicks } from "../../src/components/ComponentIndex";
import { GimmicksData, GimmicksHeading, AFYOPGimmicksPics } from "../../src/sampleData/dataIndex";

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
    tHeading: GimmicksHeading.tHeading,
    fPicture: AFYOPGimmicksPics.fPic,
    sPicture: AFYOPGimmicksPics.tPic,
    tPicture: AFYOPGimmicksPics.sPic,
  },
};