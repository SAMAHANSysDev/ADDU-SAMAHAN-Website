import { AFYOPTemplate } from '../../src/components/ComponentIndex';
import { AFYOPSimulaTVSample } from '../../src/sampleData/dataIndex';

export default {
  title: 'Template/AFYOP Template',
  component: AFYOPTemplate,
};

export const Main = {
  args: {
    SimulaTVContent: AFYOPSimulaTVSample.SimulaTVTwitter
  }
};