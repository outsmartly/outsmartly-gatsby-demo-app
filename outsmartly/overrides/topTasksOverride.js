import tasks from '../../src/data/topTasks.json';
import { chooseN } from './utils';

export const topTasksOverride = {
  name: 'Top Tasks',
  component: 'TopTasks',
  async getOverrideProps(event) {
    const { city, regionCode, deviceType } = event.visitor;
    // If for some reason we don't have their location information
    // we'll can skip this override by returning undefined.
    if (!city || !regionCode) {
      return;
    }

    // On mobile we have less room, and only one column, so we'll only render 2 tasks.
    const taskCount = deviceType === 'mobile' ? 2 : 8;
    const tasks = await fetchTopTasks(city, regionCode, taskCount);

    return {
      props: {
        visitorLocation: `${city}, ${regionCode}`,
        tasks,
      },
    };
  },
};













// This is using mock data. In a real app you would hook this up
// to your API and ideally bucket them into large enough location
// groups so that you can get good cache hit rate in the CDN and
// use 'stale-while-revalidate' cache-control
async function fetchTopTasks(city, state, count) {
  const salt = city + state;
  return chooseN(salt, tasks, count);
}
