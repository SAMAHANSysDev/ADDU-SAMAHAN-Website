import { AFYOPFeedSection } from '../../src/components/ComponentIndex';

import { AFYOPSimulaTVSample } from '../../src/sampleData/dataIndex';

export default {
  title: 'Organisms/AFYOP Feed Section',
  component: AFYOPFeedSection,
};

export const Main = {
  args: {
    variant: AFYOPSimulaTVSample.content.variant,
    content: AFYOPSimulaTVSample.content.content
  }
};