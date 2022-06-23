import { AfyopGimmickSection } from "../../src/components/ComponentIndex";
import { GimmicksData } from "../../src/sampleData/dataIndex";

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
   text: GimmicksData.firstP
  },
};