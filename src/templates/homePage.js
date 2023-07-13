import * as React from "react";
import Layout from "../components/global/Layout";
import { graphql } from "gatsby";
import HomeBanner from "../components/home/HomeBanner";
import HomeCategory from "../components/home/HomeCategory";
import HomeNewAraival from "../components/home/HomeNewAraival";
import HomeBlogs from "../components/home/HomeBlogs";

const homePage = ({data,pageContext}) => {
  // home banner data
  const {homeBanner,homeCategory,homeNewAraivals}=data 
  const {blogs}=pageContext
  return (
    <Layout pageName="index">
      {/* home banner Data  */}
      <HomeBanner homeBanner={homeBanner}/>
      {/* home category sectionn */}
      <HomeCategory homeCategory={homeCategory}/> 
      {/* home new araivals */}
      <HomeNewAraival homeNewAraivals={homeNewAraivals}/>
      {/* home blog section  */}
      <HomeBlogs blogs={blogs}/>
    </Layout>
  ); 
};

export default homePage;

export const Head = () => <title>Home page</title>;
export const myQuery = graphql`
  query SiteQuery {
  homeBanner:shopifyCollection(handle: {eq: "frontpage"}) {
    handle
    description
    descriptionHtml
    image {
      gatsbyImageData
      altText
      src
    }
    title
  }
  homeCategory:allShopifyCollection(limit: 10) {
    nodes {
      title
      handle
      image {
        gatsbyImageData
      }
    }
  }
  homeNewAraivals:  shopifyCollection(handle: {eq: "bundle"}) {
    products {
      featuredImage {
        altText
        gatsbyImageData
      }
      description
      handle
      id
   
      productType
      title
      variants {
        _product
        availableForSale
        barcode
        id
        image {
          gatsbyImageData
        }
        price
      }
    }
  }
   markdownData: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
        id
      }
    }
     site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
    sitePlugin {
      pluginOptions
      pluginFilepath
      ssrAPIs
      resolve
    }
  }



`;
