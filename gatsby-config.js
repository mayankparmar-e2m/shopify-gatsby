/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
    description:"Another website"
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: "https://e2m-testing-store.myshopify.com/api/2023-04/graphql.json",
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.GATSBY_STOREFRONT_ACCESS_TOKEN
      },
      }
    },
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.SHOPIFY_SHOP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["orders", "collections", "locations"], // for fetch collection
      },
    },
  {
    resolve: `gatsby-transformer-remark`,
    options: {},
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `pages`,
      // Path to the directory
      path: `${__dirname}/src/projects/`,
    },
  },
]
};

