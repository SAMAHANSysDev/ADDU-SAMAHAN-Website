import { AFYOPTemplate } from '../../src/components/ComponentIndex';
import { AFYOPSimulaTVSample, FaciFinderSample, GimmicksData, GimmicksHeading, AFYOPcarouselcontent} from '../../src/sampleData/dataIndex';

export default {
  title: 'Template/AFYOP Template',
  component: AFYOPTemplate,
};

export const Main = {
  args: {
    SimulaTVContent: AFYOPSimulaTVSample.SimulaTVTwitter,
    facilitators: FaciFinderSample.facilitators,
    firstP: GimmicksData.firstP,
    secondP: GimmicksData.secondP,
    thirdP: GimmicksData.thirdP,
    fHeading: GimmicksHeading.fHeading,
    sHeading: GimmicksHeading.sHeading,
    tHeading: GimmicksHeading.tHeading,
    carcon: AFYOPcarouselcontent
  }
};