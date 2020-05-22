module.exports = {
  siteMetadata: {
    title: `Welcome to Win Hub Solutions`,
    description: `The Best Professional Web Designing, Web Development, Mobile Application Development & SEO (Digital Marketing) Company in Telangana`,
    author: `@Winhubsolutions`,
    pathPrefix: "/Gatsby",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-emotion`,
    // Setup WPGraphQL.com to be the source
    
    
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "Winhub",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "winhub",
        // Url to query from
        url: "https://siteapi.winhubsolutions.in/graphql",

        // refetch interval in seconds
        refetchInterval: 60,
      },
    },
    
   
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
