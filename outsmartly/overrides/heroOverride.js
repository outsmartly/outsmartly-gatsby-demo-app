import Mustache from 'mustache';
import { states } from './states';

export const heroOverride = {
  name: 'Home Section',
  component: 'HeroSection',
  async getOverrideProps(event) {
    const { headline, description, cta } = await fetchHeroSectionAssignment(
      event,
    );

    return {
      props: {
        headline,
        description,
        cta,
      },
    };
  },
};

async function fetchHeroSectionAssignment(event) {
  const { visitor } = event;
  const { headline, description, cta } = await fetchHeroSection(event);

  return {
    headline: geoPersonalize(visitor, headline),
    description: geoPersonalize(visitor, description),
    cta: {
      href: cta.href,
      label: geoPersonalize(visitor, cta.label),
    },
  };
}

function geoPersonalize(visitor, string) {
  const view = {
    geo_city: visitor.city,
    geo_state: states[visitor.regionCode]?.state || visitor.country,
    geo_state_demonym: states[visitor.regionCode]?.demonym || 'Tasker',
  };
  return Mustache.render(string, view);
}

// TODO: Pull variations from Contentful
const variations = [
  {
    headline: "We've got fake task runners in {{geo_city}}, ready to serve.",
    description:
      "Don't be fooled, this isn't a real company in {{geo_state}} or anywhere else for that matter. This is an example of doing dynamic personalization with Outsmartly.",
    cta: {
      link: '/somewhere',
      label: 'Find a {{geo_state_demonym}} ready to help',
    },
  },
  {
    headline: "We've got a fake {{geo_state_demonym}} ready for any task.",
    description:
      "Don't be fooled, this isn't a real company in {{geo_city}} or anywhere else for that matter. This is an example of doing dynamic personalization with Outsmartly.",
    cta: {
      link: '/somewhere',
      label: 'Find Taskers in {{geo_state}}',
    },
  },
];

async function fetchHeroSection(event) {
  // randomized for demo, real a/b test would be consistent
  return variations[Math.random() > 0.5 ? 0 : 1];
}
