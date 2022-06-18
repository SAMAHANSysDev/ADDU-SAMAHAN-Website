import { useThemeVariants } from "@mui/styles";
import { AFYOPContainer } from "../../src/components/ComponentIndex";
import { AFYOPContainerSample } from "../../src/sampleData/AFYOPContainerSample.json";

export default {
  title: "Molecules/AFYOP Container",
  component: AFYOPContainer,
  parameters:{
    backgrounds:{
        default: "ADDU Blue"
    }
}
};

export const Main = {
  args: {
    title: AFYOPContainerSample.label.title,
    variant: AFYOPContainerSample.label.variant,
    content: AFYOPContainerSample.content
  },
};
