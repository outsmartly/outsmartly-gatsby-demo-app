import { heroOverride } from './outsmartly/overrides/heroOverride';
import { topTasksOverride } from './outsmartly/overrides/topTasksOverride';

export default {
  host: 'gatsbyconf.outsmartly.app',
  environments: [
    {
      name: 'production',
      origin: 'https://outsmartly-gatsby-demo-app.netlify.app',
    },
  ],
  routes: [
    {
      path: '/',
      overrides: [heroOverride, topTasksOverride],
    },
  ],
};
