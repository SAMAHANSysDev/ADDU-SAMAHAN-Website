import { Facilitators } from '../../src/components/ComponentIndex';

import { FaciFinderSample } from '../../src/sampleData/dataIndex';

export default {
  title: 'Molecules/Facilitators',
  component: Facilitators,
};

export const Main = {
  args: {
    facilitators: FaciFinderSample.facilitators
  }
};