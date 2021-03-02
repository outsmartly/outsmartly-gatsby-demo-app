module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: 'TaskMallard',
  },
  plugins: [
    '@outsmartly/gatsby-plugin-outsmartly',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/': [
            // Some CDNs, such as Outsmartly and Fastly, support  the Surrogate-Control
            // header as a way of customizing the CDN caching behavior separately from
            // what the browser is supposed to do, giving you much more control.
            'Surrogate-Control: max-age=1, stale-while-revalidate=30',
            'Cache-Control: no-store, max-age=0',
          ],
        },
        // Some CDNs, such as Cloudflare, will look at Link preload headers and do
        // an HTTP/2 push. In the case of the JS files, this is not desirable because
        // it can cause download contention with more important resources, like fonts.
        mergeLinkHeaders: false,
      },
    },
  ],
};
