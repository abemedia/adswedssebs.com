import * as dotenv from 'dotenv' // eslint-disable-line import/no-extraneous-dependencies
import type { GatsbyConfig } from 'gatsby'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const config: GatsbyConfig = {
  siteMetadata: {
    title: '#AdsWedsSebs',
    description: 'Extract, transform & load data from any source. No code required.',
    author: '@abemedia',
    siteUrl: process.env.GATSBY_SITE_URL,
  },
  trailingSlash: 'always',
  graphqlTypegen: {
    typesOutputPath: 'src/types/gatsby-types.d.ts',
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml.name',
  },
  plugins: [
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-yaml',
    'gatsby-transformer-inline-svg',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1024,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 1rem 0;',
            },
          },
          'gatsby-remark-smartypants',
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: 'Table of Contents',
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 6,
              className: 'table-of-contents',
            },
          },
          { resolve: 'gatsby-remark-vscode', options: { injectStyles: false } },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-external-links',
        ],
      },
    },
    { resolve: 'gatsby-source-filesystem', options: { path: `${__dirname}/src/images` } },
    { resolve: 'gatsby-plugin-react-svg', options: { rule: { include: /\.inline\.svg$/ } } },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '#AdsWedsSebs',
        short_name: '#AdsWedsSebs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
      },
    },
    // { resolve: 'gatsby-plugin-google-analytics', options: { trackingId: 'UA-123' } },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
    'gatsby-plugin-typescript',
    'gatsby-plugin-typescript-checker',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-babel-plugin-typescript-to-proptypes',
      options: { disable: process.env.NODE_ENV === 'production' },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

export default config
