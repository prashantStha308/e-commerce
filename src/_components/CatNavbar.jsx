"use client";
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/_store/DataStore';

const CatNavbar = ({ currentPage }) => {

  console.log("Current Page: ",currentPage);

  const { data: categories=[] , isPending , isError } = useQuery({
    queryFn: ()=> fetchData("products/categories"),
    queryKey: ["fetchedCategories"]
  })

  if( isPending ){
    return(
      <nav className="bg-white border-gray-200 dark:bg-gray-900 border-t border-y-purple-600 dark:border-purple-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="justify-between flex" id="navbar-cta">
          
          <ul className="flex flex-wrap justify-start font-medium ">
            {/* "All" Link */}
            <li className="block">
              <Link 
                href="/category/all" 
                className={`transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent hover:text-purple-500 active:text-purple-700 ${
                  currentPage === 'all' ? 'text-purple-700 dark:text-purple-400' : ''
                }`} 
                aria-current="page"
              >
                All
              </Link>
            </li>
            <li className="block">
              <Link 
                href="/category/trending" 
                className={`transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent hover:text-purple-500 active:text-purple-700 ${
                  currentPage === 'trending' ? 'text-purple-700 dark:text-purple-400' : ''
                }`} 
                aria-current="page"
              >
                Trending
              </Link>
            </li>
              
            <li className='transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent text-gray-900 dark:text-gray-100 dark:hover:text-purple-500 hover:text-purple-500 active:text-purple-700' >
              ... .... .....
            </li>

          </ul>
        </div>
      </div>
    </nav>
    )
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 border-t border-y-purple-600 dark:border-purple-400">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="justify-between flex" id="navbar-cta">
          
          <ul className="flex flex-wrap justify-start font-medium ">
            {/* "All" Link */}
            <li className="block">
              <Link 
                href="/category/all" 
                className={`transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent hover:text-purple-500 active:text-purple-700 ${
                  currentPage === 'all' ? 'text-purple-700 dark:text-purple-400' : ''
                }`} 
                aria-current="page"
              >
                All
              </Link>
            </li>
            <li className="block">
              <Link 
                href="/category/trending" 
                className={`transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent hover:text-purple-500 active:text-purple-700 ${
                  currentPage === 'trending' ? 'text-purple-700 dark:text-purple-400' : ''
                }`} 
                aria-current="page"
              >
                Trending
              </Link>
            </li>

            {/* Dynamic Category Links */}
            {categories.map((category) => (
              <li key={category.id} className="block ">
                <Link 
                  href={`/category/${category.slug}`} 
                  className={`transition-all duration-100 ease-in-out block py-2 px-3 bg-transparent text-gray-900 dark:text-gray-100 dark:hover:text-purple-500 hover:text-purple-500 active:text-purple-700 ${
                    currentPage === category.slug ? 'text-purple-700 dark:text-purple-400' : ''
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default CatNavbar;