"use client"

import React from 'react'
import { HeartIcon } from '@heroicons/react/20/solid'
import { useProductAtCheckout } from '../_store/store'
import Link from 'next/link'
import { useProduct } from '../_store/ContextProvider'

const AddToCart = ({ id }) => {

    const allProducts = useProduct();
    const { addProduct } = useProductAtCheckout();
  return (

    <div className="mt-10 flex gap-4">
        <button
            type="button"
            className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
           onClick={()=>addProduct(id , allProducts)}
        >
            Add to bag
        </button>

        <Link href={`/checkout/${id}`}>
            <button
                type="button"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full" >
                Checkout
            </button>
        </Link>

        <button
        type="button"
        className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
        <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
        <span className="sr-only">Add to favorites</span>
        </button>
    </div>

  )
}

export default AddToCart