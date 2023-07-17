import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { memo, useCallback, useState } from 'react'
import useCart from '../../hooks/useCart';

 function ProductCard({product}) {
  const  {addVariantToCart,toggleCartDrawer} =useCart();
  const [addToCartLoader,setAddToCartLoader]=useState(false)
    const selectedVariant=  product.variants[0];
    const imageData=getImage(selectedVariant.image) || getImage(product?.featuredImage?.gatsbyImageData)
    const addToCart=useCallback(
        ()=>{
            setAddToCartLoader(true)
            addVariantToCart({variantId:selectedVariant.storefrontId, quantity:1},()=>{
             setAddToCartLoader(false);
             toggleCartDrawer(true)
            })  
    },[addVariantToCart,toggleCartDrawer,selectedVariant.storefrontId])
  return (
    <div className="bg-white shadow rounded overflow-hidden group flex flex-col justify-between">
    <div className="relative">
        <GatsbyImage image={imageData} alt="product 1" className="w-full"/>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
        justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <Link to={`/products/${product.handle}`}
                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="view product">
                <i className="fa-solid fa-magnifying-glass"></i>
            </Link>
          <Link to={`/products/${product.handle}`}
                className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                title="add to wishlist">
                <i className="fa-solid fa-heart"></i>
            </Link>
        </div>
    </div>
    <div className="pt-4 pb-3 px-4">
    <Link to={`/products/${product.handle}`}>
            <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">{product.title}</h4>
        </Link>
        <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">$45.00</p>
            <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
                <span><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
    </div>
    <button
    onClick={()=>addToCart()}
        className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">
            {
                addToCartLoader?"Adding...":"Add to cart"
            }
            </button>
</div>
  )
}
export default memo(ProductCard)