/* eslint @typescript-eslint/camelcase: 0 */
/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Tom Dong | Front-end Developer`,
    description: `I'm a computer science major who's passionate about front-end development with an eye for basic design.`,
    author: `Tom Dong`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tom Dong | Front-end Developer`,
        short_name: `Tom Dong`,
        start_url: `/`,
        background_color: `#f9f9f9`,
        theme_color: `#f9f9f9`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
