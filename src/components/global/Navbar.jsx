import { Link} from 'gatsby'
//import { StaticImage } from 'gatsby-plugin-image';
import React from 'react'
import useCart from '../../hooks/useCart'
import useIsCustomerLogin from '../../hooks/useIsCustomerLogin';

export default function Navbar() {
    const {cart}=useCart();
   const {isCustomerLogin}= useIsCustomerLogin()
  return (
    <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <Link to='/'>
            Logo
            </Link>

            <div className="w-full max-w-xl relative flex">
                <span className="absolute left-4 top-3 text-lg text-gray-400">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" name="search" id="search"
                    className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                    placeholder="search"/>
                <button
                    className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
            </div>

            <div className="flex gap-3 items-center space-x-4">

                <Link to='/cart' className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-solid fa-bag-shopping"></i>
                    </div>
                    <div className="text-lg leading-3">Cart</div>
                    <div
                        className="absolute -right-4 -top-4 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                       {cart.totalQuantity}</div>
                </Link>
                <Link to={isCustomerLogin?"/account":"/account/login"} className="text-center text-gray-700 hover:text-primary transition relative">
                    <div className="text-2xl">
                        <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="text-lg leading-3">Account</div>
                </Link>
            </div>
        </div>
    </header>
  )
}
 