module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: `dev-codelabsDB`,
        collection: [`labs`, `labCategories`],
        connectionString: `mongodb+srv://dev-claat-user:S1ak7L4HJyy0IGig@cluster0.scyiw.mongodb.net`,
        extraParams: {
          ssl: true,
          authSource: 'admin',
          replicaSet: 'atlas-bccn65-shard-0',
          w: 'majority',
          readPreference: 'primary',
          retryWrites: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mulesoft_blue_logo.svg`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
