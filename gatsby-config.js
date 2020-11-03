/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const remark = require('remark');
const emoji = require('remark-emoji');
const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Mritunjay Sharma`,
    description: `Personal Blog by Mritunjay Sharma`,
    author: `Mritunjay Sharma`,
    menuLinks: [
      {
        name: `Blog`,
        url: `/`,
      },
      {
        name: `Projects`,
        url: `/projects/`,
      },
      {
        name: `Notes`,
        url: `/notes`,
      },
      {
        name: `Resume`,
        url: `https://drive.google.com/file/d/17zW8grPJZRVPUJFK2oLMcBYwqTbS1GIc/view`
      }
    ],
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/mritunjay394`,
      },
      {
        name: `github`,
        url: `https://github.com/mritunjaysharma394`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/mritunjay394/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-theme-notes`,
      options: {
        // basePath defaults to `/`
        basePath: `/notes`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        remarkPlugins: [emoji],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mritunjay Sharma`,
        short_name: `Mritunjay`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png',
      },
    },
    `gatsby-plugin-react-helmet`,
    `@pauliescanlon/gatsby-mdx-embed`,
  ],
}
