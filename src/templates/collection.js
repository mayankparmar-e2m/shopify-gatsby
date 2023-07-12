import { getImage } from "gatsby-plugin-image";
import React from "react";
import CollectionBanner from "../components/collection/CollectionBanner";
import Layout from "../components/global/Layout";
import CollectionProducts from "../components/collection/CollectionProducts";
export default function collection({ pageContext }) {
  const { collection } = pageContext;
  const imageData = getImage(collection.image.gatsbyImageData);
  return (
    <Layout>
      <div className="collection-page">
        <CollectionBanner image={imageData} title={collection.title} />
        <CollectionProducts title={collection.title} products={collection.products}/>
      </div>
    </Layout>
  );
}
export const Head = ({ pageContext }) => {
  const { collection } = pageContext;
 return <>
    <title>{collection.title} - Collection</title>
    <meta name="description" content="Hello World" />
  </>

}
 