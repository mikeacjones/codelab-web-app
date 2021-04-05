module.exports = {
  siteMetadata: {
    title: `MuleSoft Codelabs`,
    description: `A collection of guided labs demonstrating how to build MuleSoft integrations.`,
    author: `mikeacjones`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        dbName: process.env.MONGO_DB,
        collection: [process.env.MONGO_COLLECTION_LABS, process.env.MONGO_COLLECTION_CATS],
        connectionString: `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`,
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
        name: `mulesoft-codelabs`,
        short_name: `codelabs`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
