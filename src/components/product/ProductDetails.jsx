import { Link } from "gatsby";
import React, {  useState } from "react";
import VariantSelector from "../global/VariantSelector";
import useMoney from "../../hooks/useMoney";
import useCart from "../../hooks/useCart";

export default function ProductDetails({ product }) {
  const {addVariantToCart}=useCart();
const [addToCartLoader,setAddToCartLoader] = useState(false)
  const { variants } = product;
  const selectedFirstOrAvailabeVariant =
    variants.find((variant) => variant.availableForSale === true) ||
    variants[0];
  const [selectedVariant, setSelectedVariant] = useState(
    selectedFirstOrAvailabeVariant
  );
  const variantPrice = {
    price: selectedVariant.price,
    compareAtPrice: selectedVariant.compareAtPrice,
    currencyCode: "USD",
    withZero:true
  };
  const selectedVariantPrice = useMoney(variantPrice);
  const addToCart=()=>{
     setAddToCartLoader(true)
     addVariantToCart({variantId:selectedVariant.storefrontId, quantity:1},()=>{
      setAddToCartLoader(false)
     })
    
  }
  return (
    <div className="product-detail w-1/2">
      <h2 className="text-3xl font-medium uppercase mb-2">{product.title}</h2>
      <div className="flex items-center mb-4">
        <div className="flex gap-1 text-sm text-yellow-400">
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
        </div>
        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
      </div>
      <div className="space-y-2">
        <p className="text-gray-800 font-semibold space-x-2">
          <span>Availability: </span>
          {selectedVariant.availableForSale ? (
            <span className="text-green-600">In Stock</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Brand: </span>
          <span className="text-gray-600">{product?.vendor}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">Category: </span>
          <span className="text-gray-600">{product?.productType}</span>
        </p>
        <p className="space-x-2">
          <span className="text-gray-800 font-semibold">SKU: </span>
          <span className="text-gray-600">{selectedVariant?.sku}</span>
        </p>
      </div>
      <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
        <p className="text-xl text-primary font-semibold">{selectedVariantPrice?.price}</p>
        {
           selectedVariantPrice?.compareAtPrice &&  <p className="text-base text-gray-400 line-through">{selectedVariantPrice?.compareAtPrice}</p>
        }
       
      </div>
      <p className="mt-4 text-gray-600">{product.description}</p>
      {/* product variant selector */}
      <VariantSelector
        product={product}
        selectedFirstOrAvailabeVariant={selectedFirstOrAvailabeVariant}
        onVariantSelectorChange={setSelectedVariant}
      />
      <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            4
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
            +
          </div>
        </div>
      </div>

      <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
        <button
         onClick={()=>addToCart()}
          className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition"
        >
          <i className="fa-solid fa-bag-shopping"></i>{addToCartLoader ? "Adding...":"Add to cart"} 
        </button>
        <Link
          to={``}
          className="border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition"
        >
          <i className="fa-solid fa-heart"></i> Wishlist
        </Link>
      </div>

      <div className="flex gap-3 mt-4">
        <Link
          to={``}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link
          to={``}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link
          to={``}
          className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
        >
          <i className="fa-brands fa-instagram"></i>
        </Link>
      </div>
    </div>
  );
}
