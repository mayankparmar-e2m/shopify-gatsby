import  { useContext } from "react"
import { StoreContext } from "../context/storeContext/store-context"

const useCart = () => {
    const {loading,addProductVariantToCart,removeLineItem, updateLineItem,cart} = useContext(StoreContext);
    if (cart === undefined) {
      throw new Error("useCart must be used within StoreContext")
    }
    const addVariantToCart=({variantId, quantity})=>{
        const variantData={
            variantId, quantity
        }
        addProductVariantToCart(variantData)
    }
    const updateCartLineItem=({lineId, quantity})=>{
        const lineItemToUpdate={
            lineId, quantity,
            cartId:cart.id
        }
        updateLineItem(lineItemToUpdate)
    }
    const removeCartLineItem=({lineId})=>{
        const lineItemToUpdate={
            lineId,
            cartId:cart.id
        }
        removeLineItem(lineItemToUpdate)
    }
    return {loading,addVariantToCart,removeCartLineItem, updateCartLineItem,cart}
  }
  export default useCart