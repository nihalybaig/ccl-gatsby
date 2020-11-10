module.exports = {
  siteMetadata: {
    title: `Continental Company Ltd`,
    description: `Continental Logistic offers a full array of services that Will help you solve all of your logistic challenges throughout the Kingdom of Saudi Arabia.`,
    image: `src/images/gatsby-icon-300x200.png`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
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
