import { AfyopGimmickSection } from "../../src/components/ComponentIndex";
import { GimmicksData, GimmicksHeading, AFYOPGimmicksPics } from "../../src/sampleData/dataIndex";

export default {
  title: "Molecules/AfyopGimmickSection",
  component: AfyopGimmickSection,
  parameters: {
    backgrounds: {
      default: "ADDU Blue",
    },
  },
};

export const Main = {
  args: {
   text: GimmicksData.firstP,
   heading: GimmicksHeading.fHeading,
   pic: AFYOPGimmicksPics.fPic
  },
};