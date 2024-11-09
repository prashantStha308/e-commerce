"use client";
import Link from 'next/link';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../_store/store';

const CatSubNav = ({ currentPage }) => {
  const { data: categories=[] , isLoading , error } = useQuery({
    queryFn: ()=> fetchData("products/categories"),
    queryKey: ["fetchCategories"]
  })

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="justify-between flex" id="navbar-cta">
          
        <ul className="flex flex-wrap justify-start font-medium bg-white dark:bg-gray-900">
          {/* "All" Link */}
          <li className="block">
            <Link 
              href="/category" 
              className={`block py-2 px-3 bg-transparent hover:text-blue-500 ${
                currentPage === 'all' ? 'text-blue-700 md:dark:text-blue-500' : ''
              }`} 
              aria-current="page"
            >
              All
            </Link>
          </li>

          {/* Dynamic Category Links */}
          {categories.map((category) => (
            <li key={category.id} className="block">
              <Link 
                href={`/category/${category.slug}`} 
                className={`block py-2 px-3 bg-transparent text-gray-900 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500 ${
                  currentPage === category.slug ? 'text-blue-700 md:dark:text-blue-500' : ''
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

export default CatSubNav;
