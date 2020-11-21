module.exports = {
  siteMetadata: {
    title: `Continental Company Ltd`,
    description: `CONTINENTAL COMPANY LTD S.A. is one of the major distributors of imported foods and beverages, and other consumer goods.`,
    author: `@nihalybaig`,
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
    `gatsby-plugin-sass`,
    "gatsby-plugin-page-transitions",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `continental-company-limited`,
        short_name: `ccl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
