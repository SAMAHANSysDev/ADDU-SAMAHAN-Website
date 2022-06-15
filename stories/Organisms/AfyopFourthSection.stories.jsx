import { AfyopFourthSection } from "../../src/components/ComponentIndex";
import { CFData } from "../../src/sampleData/dataIndex";

export default {
    title: "Organisms/AFYOP Page Fourth Section",
    component: AfyopFourthSection,
  };
  
  export const Main = {
    args: {
      variant: CFData.content.variant,
      content: CFData.content.items
    },
  };