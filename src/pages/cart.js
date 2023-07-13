import React from "react";
import Layout from "../components/global/Layout";
import useCart from "../hooks/useCart";
import CartItem from "../components/cart/CartItem";

export default function Cart() {
  const { loading, cart } = useCart();
  const cartItems = cart?.lines?.nodes || [];
  return (
    <Layout>
      <div className="cart-page">
        {loading && (
          <div className="cart-loading h-screen text-center relative">
            <h1 className="absolute text-6xl font-bold top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
              Cart Loading...
            </h1>
          </div>
        )}
        {!loading && cart.totalQuantity === 0 && (
          <div className="cart-empty h-screen text-center relative">
            <h1 className="absolute text-6xl font-bold top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 ">
              Cart Is Empty
            </h1>
          </div>
        )}
        {!loading && cart.totalQuantity > 0 && (
          <div className="container">
            <div className="cart-items">
              <h1 className="text-4xl text-[#121212] my-4">Cart page</h1>
              <div className="cart-items-wrapper my-2">
                {cartItems.map((cartItem) => {
                  return <CartItem item={cartItem} key={cartItem.id} />;
                })}
              </div>
            </div>
            <button onClick={()=>window.location.href=cart.checkoutUrl} className="text-center w-[200px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">checkout</button>
          </div>
        )}
           
      </div>
   
    </Layout>
  );
}
export const Head = () => {
  return (
    <>
      <title>Cart Page</title>
    </>
  );
};
