const path = require(`path`)
const clientApollo=require("./src/utils/clientApollo")
const { gql } = require("@apollo/client")
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // Query for all products in Shopify
    const result = await graphql(`
      query {
        allShopifyCollection {
            nodes {
              description
              descriptionHtml
              handle
              id
              title
              image {
                altText
                gatsbyImageData
                src
              }
              metafields {
                id
                key
                namespace
              }
              products {
                description
                descriptionHtml
                featuredImage {
                  gatsbyImageData
                }
                handle
                hasOnlyDefaultVariant
                hasOutOfStockVariants
                id
                metafields {
                  key
                  id
                  namespace
                }
                productType
                priceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                tags
                title
                variants {
                  compareAtPrice
                  availableForSale
                  image {
                    gatsbyImageData
                    altText
                  }
                  id
                  price
                  title
                }
              }
            }
          }
      }
    `)
    // Iterate over all products and create a new page using a template
    // The product "handle" is generated automatically by Shopify
    result.data.allShopifyCollection.nodes.forEach((node) => {
      createPage({
        path: `/collections/${node.handle}`,
        component: path.resolve(`./src/templates/collection.js`),
        context: {
          collection: node,
        },
      })
    })
    // product page 
    const productPage = await graphql(`
    query{
      allShopifyProduct {
        nodes {
          productType
          description
          featuredImage {
            gatsbyImageData
          }
          handle
          hasOnlyDefaultVariant
          hasOutOfStockVariants
          id
          shopifyId
          media {
            preview {
              image {
                gatsbyImageData
              }
            }
          }
          options {
            name
            position
            shopifyId
            values
          }
          productType
          seo {
            description
            title
          }
          status
          tags
          title
          vendor
          variants {
            selectedOptions {
              name
              value
            }
            availableForSale
            id
            compareAtPrice
            image {
              gatsbyImageData
            }
            inventoryPolicy
            inventoryQuantity
            position
            price
            sku
            title
            storefrontId
            presentmentPrices {
              compareAtPrice {
                amount
                currencyCode
              }
              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
    `)
    productPage.data.allShopifyProduct.nodes.forEach((node) => {
      createPage({
        path: `/products/${node.handle}`,
        component: path.resolve(`./src/templates/product.js`),
        context: {
          product: node,
        },
      })
    })
    const blogPageByCategories= await clientApollo.query({
      query:gql`query{
        blogs(first: 100) {
          nodes {
            handle
            id
            onlineStoreUrl
            seo {
              description
              title
            }
            title
            articles(first: 100) {
              nodes {
                handle
                image {
                  altText
                  height
                  id
                  url
                  width
                }
                title
                excerptHtml
                excerpt
                content
           contentHtml
           publishedAt
           authorV2 {
            name
          }
              }
            }
          }
        }
      }`
    })
    blogPageByCategories.data.blogs.nodes.forEach((node)=>{
      createPage({
        path:`/blogs/${node.handle}`,
        component: path.resolve(`./src/templates/blogByCategory.js`),
        context: {
          blog: {...node},
        },
      })
    })
    // article  page creations
    const articlePage= await clientApollo.query({
      query: gql`query {
        articles(first: 100) {
          nodes {
            handle
            contentHtml
            
            title
            tags
            seo {
              description
              title
            }
            publishedAt
            onlineStoreUrl
            image {
              altText
              height
              id
              url
              width
            }
            id
            excerpt
            excerptHtml
            content
            authorV2 {
              name
              lastName
              firstName
            }
            blog {
              handle
            }
          }
         }
       }
        
       `})
       articlePage.data.articles.nodes.forEach((node) => {
        createPage({
          path: `/blogs/${node.blog.handle}/${node.handle}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            article: node,
          },
        })
      })
      // home page
      const homePage= await clientApollo.query({
        query: gql`query{
          blogs(first: 100) {
            nodes {
              handle
              id
              onlineStoreUrl
              seo {
                description
                title
              }
              title
              articles(first: 100) {
                nodes {
                  handle
                  image {
                    altText
                    height
                    id
                    url
                    width
                  }
                  title
                  excerptHtml
                  excerpt
                  content
             contentHtml
             publishedAt
             authorV2 {
              name
            }
                }
              }
            }
          }
        }`})
        createPage({
          path: `/`,
          component: path.resolve(`./src/templates/homePage.js`),
          context: {
            blogs: homePage.data.blogs,
          },
        })
  }