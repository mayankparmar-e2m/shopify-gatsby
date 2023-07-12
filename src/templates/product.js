import React from 'react'
import Layout from '../components/global/Layout'
import ProductSlider from '../components/product/ProductSlider'
import ProductDetails from '../components/product/ProductDetails'

export default function product({ pageContext }) {
    const {product}=pageContext 
  return (
   <Layout>
    <div className='product-page py-6'>
    <div className="container">
        <div className='flex flex-wrap'>
          {/* product slider  */}
        <ProductSlider media={product.media}/>
        {/* product details */}
        <ProductDetails product={product}/>
        </div>
        </div>
    </div>
   </Layout>
  )
}
export const Head = ({ pageContext }) => {
    const {product}=pageContext 
   return <>
   <title>{product.title}</title>
      <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    </>
  
  }