import * as React from 'react';
import Head from 'react-helmet';

import './index.scss';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { HeroSection } from 'components/HeroSection';
import { TwoColumnInfoSection } from 'components/TwoColumnInfoSection';
import { SellHomeImage } from 'components/images/SellHomeImage';
import { TowTruckImage } from 'components/images/TowTruckImage';
import { TaskFinderSection } from 'components/TaskFinderSection';
import { OneColumnInfoSection } from 'components/OneColumnInfoSection';
import { MoverImage } from 'components/images/MoverImage';
import { VideoChatImage } from 'components/images/VideoChatImage';
import { TopTasks } from 'components/TopTasks';
import { FakeLink } from 'components/FakeLink';

export default function Index({ data }) {
  const { hero } = data.allDefaultDataJson.edges[0].node;
  const topTasks = data.allTopTasksJson.edges.map((edge) => edge.node);

  return (
    <>
      <Head>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content="TaskMallard is a demo of Outsmartly's platform being used on a fake company's website."
        />
      </Head>
      <Header />
      <main>
        <HeroSection
          headline={hero.headline}
          description={hero.description}
          cta={hero.cta}
        />
        <TopTasks tasks={topTasks} />
        <TwoColumnInfoSection
          title="Sell your home without leaving your home."
          bullets={[
            'No more strangers coming into your domicile.',
            "You don't need to clean your house first.",
            'Commissions start at 50% for first time sellers.',
          ]}
          image={<SellHomeImage />}
          order="text-right"
        />
        <TwoColumnInfoSection
          title="Have your car towed home, no matter what time it is."
          image={<TowTruckImage />}
          order="text-left"
        />
        <TwoColumnInfoSection
          title="Get help with your move."
          bullets={[
            'Packing, lifting, driving, all available.',
            'Bonded and insured movers, guaranteed.',
          ]}
          image={<MoverImage />}
          order="text-right"
        />
        <TaskFinderSection />
        <TwoColumnInfoSection
          title="Get lessons in professionalism."
          bullets={[
            'One more Zoom call, but this one is different.',
            'We all could use one of these.',
            'I am not sure what else to say.',
          ]}
          image={<VideoChatImage />}
          order="text-right"
        />
        <OneColumnInfoSection
          title="Try it out today!"
          description={
            <>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
              <FakeLink className="btn btn-secondary btn-lg">
                Get Started
              </FakeLink>
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allDefaultDataJson {
      edges {
        node {
          hero {
            headline
            description
            cta {
              label
              href
            }
          }
        }
      }
    }
    allTopTasksJson(limit: 8) {
      edges {
        node {
          name
          starCount
          image {
            url
            description
          }
          priceRange {
            low
            high
          }
        }
      }
    }
  }
`;
