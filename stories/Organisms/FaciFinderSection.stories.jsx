import { FaciFinderSection } from '../../src/components/ComponentIndex';
import { FaciFinderSample } from '../../src/sampleData/dataIndex'

export default {
  title: 'Organisms/FaciFinderSection',
  component: FaciFinderSection,
};

export const Main = {
  args: {
    facilitators: FaciFinderSample.facilitators
  }
};