import { MainImage } from 'gatsby-plugin-image'
import React from 'react'
import useCart from '../../hooks/useCart'

export default function CartItem({item}) {
    const {updateCartLineItem,removeCartLineItem} =useCart()
  return (
    <div className='cart-item w-full flex items-center justify-between mb-8 border border-[#cacaca] p-5'>
        <div className='item-details flex items-center w-2/6'>
        <div className='image w-28 h-28 shadow-md mr-2'>
            <MainImage src ={item.merchandise.image.url} alt={item.merchandise.title} />
        </div>
        <div className='product'>
            <h4>Title  : {item.merchandise.product.title}</h4>
            <p>Variant  : {item.merchandise.title}</p>
        </div>
        </div>
        <div className='item-quantity w-2/6'>
        <div className="mt-4">
        <h3 className="text-sm text-gray-800 uppercase mb-1 text-center">Quantity</h3>
        <div className="mx-auto flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={()=>updateCartLineItem({lineId:item.id, quantity:item.quantity-1})}>
            -
          </div>
          <div className="h-8 w-8 text-base flex items-center justify-center">
            {item.quantity}
          </div>
          <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none" onClick={()=>updateCartLineItem({lineId:item.id, quantity:item.quantity+1})}>
            +
          </div>
        </div>
      </div>
        </div>
        <div className='item-delete w-2/6 text-center'>
            <button onClick={()=>removeCartLineItem({lineId:item.id})} className='bg-red-500  hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded'>Delete</button>
            </div>
    </div>
  )
}
