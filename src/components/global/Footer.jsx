import { Link } from 'gatsby'
import React from 'react'

export default function Footer() {
  return (
<footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to="/" activeClassName="active" className="mr-4 hover:underline md:mr-6 ">Home</Link>
        </li>
        <li>
            <Link to="/products" activeClassName="active" className="mr-4 hover:underline md:mr-6">Product</Link>
        </li>
        <li>
            <Link to="/about" activeClassName="active" className="mr-4 hover:underline md:mr-6">About</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}
