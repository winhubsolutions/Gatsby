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
        path: `./src/content`,
      },
    },
    `gatsby-plugin-emotion`,
    // Setup WPGraphQL.com to be the source
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        baseUrl: `siteapi.winhubsolutions.in`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
         // Set to true to debug endpoints on 'gatsby build'
         verboseOutput: true,
      //   includedRoutes: [
      //         "**/categories",
      //         "**/posts",
      //         "**/pages",
      //         "**/media",
      //         "**/tags",
      //         "**/taxonomies",
      //         "**/portfolio",
      //         "**/users",
      //  ],
      },
    },
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
