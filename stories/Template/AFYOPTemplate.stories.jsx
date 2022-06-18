import { AFYOPTemplate } from '../../src/components/ComponentIndex';
import { AFYOPSimulaTVSample, FaciFinderSample } from '../../src/sampleData/dataIndex';

export default {
  title: 'Template/AFYOP Template',
  component: AFYOPTemplate,
};

export const Main = {
  args: {
    SimulaTVContent: AFYOPSimulaTVSample.SimulaTVTwitter,
    facilitators: FaciFinderSample.facilitators
  }
};