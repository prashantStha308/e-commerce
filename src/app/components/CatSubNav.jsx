// Sub navbar for @/Linkpp/category/page.jsx

import Link from 'next/link'
import React from 'react'

const CatSubNav = ( {currentPage} ) => {
  return (

    <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className=" justify-between flex " id="navbar-cta">
            <ul className="flex font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-white dark:bg-gray-900 ">
            <li>
                <Link href="/category" className={`block py-2 px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'all' ? "text-blue-700 md:dark:text-blue-500" : ""  }`} aria-current="page">All</Link> 
            </li>
            <li>
                <Link href="/category/beauty" className={`block py-2 px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'beauty' ? "text-blue-700 md:dark:text-blue-500" : ""  }`}>Beauty</Link>
            </li>

            <li>
                <Link href="/category/art_craft" className={`block py-2 px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'art' ? "text-blue-700 md:dark:text-blue-500" : ""  }`}> Art and Craft </Link>
            </li>

            <li>
                <Link href="/category/others" className={`block py-2 px-3 md:p-0  bg-transparent hover:text-blue-500 ${ currentPage === 'others' ? "text-blue-700 md:dark:text-blue-500" : ""  }`}> Others </Link>
            </li>
            </ul>
        </div>
        </div>
    </nav>

    )
}

export default CatSubNav