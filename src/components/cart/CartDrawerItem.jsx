import React from 'react'
import useCart from '../../hooks/useCart';
import useMoney from '../../hooks/useMoney';

export default function CartDrawerItem({cartItem}) {
    const cartItemPrice = {
        price: cartItem.merchandise.price.amount,
        currencyCode: "USD",
        withZero:true
      };
      console.log(cartItem,'cartItem')
     const price=  useMoney(cartItemPrice)
    const {updateCartLineItem,removeCartLineItem}=useCart();
    console.log(price,'pricepriceprice')
  return (   
    <li className="flex py-6" key={cartItem.id}>
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img src ={cartItem.merchandise.image.url} alt={cartItem.merchandise.title} className="h-full w-full object-cover object-center"/>
                                    </div>
              
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href="#">{cartItem.merchandise.product.title}</a>
                                          </h3>
                                          <p className="ml-4">{price?.price}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">{cartItem.merchandise.title}</p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                      <div className="mx-auto flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={()=>updateCartLineItem({lineId:cartItem.id, quantity:cartItem.quantity-1})}>
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {cartItem.quantity}
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={()=>updateCartLineItem({lineId:cartItem.id, quantity:cartItem.quantity+1})}>
            +
          </div>
        </div>
              
                                        <div className="flex">
                                          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500"onClick={()=>removeCartLineItem({lineId:cartItem.id})}>Remove</button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
  )
}
