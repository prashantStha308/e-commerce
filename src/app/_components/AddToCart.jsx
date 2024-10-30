"use client"
import React, { useEffect } from 'react'
import { HeartIcon , MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useProductAtCheckout } from '../_store/store'
import Link from 'next/link'
import { useProduct } from '../_store/ContextProvider'
import { useState , useRef } from 'react';


const AddToCart = ({ id }) => {
    // Importing all the available products in contextProvider
    const allProducts = useProduct();

    // state for count
    const [count, setCount] = useState(0);
    // state for favourite
    const [ isFav , setIsFav ] = useState(false);
    // state for button's contents
    const [ addToBag , setAddToBag ] = useState("Add To Cart");
    // imprting necessary functions from useProductAtCheckout
    const { product , addProduct , removeProduct , addToFav } = useProductAtCheckout();

    // finding the target product.
    const targetProduct = product.find( item =>( item.id == id ) );

    // intervalId to updated the contents of 'Add to Cart' button
    const intervalId = useRef(null);
  
    // Increment the count
    const handleCountInr = () => {
      setCount((prev) => prev + 1);
    };
  
    // Decrement the count, ensuring it doesn't go below 0
    const handleCountDcr = () => {
      setCount((prev) => Math.max(0, prev - 1));
    };


    // Function to handle the "Add to Bag" button click
    const handelAddToBag = () => {
        setAddToBag("Added To Cart");

        // Clear any existing interval before setting a new one
        if (intervalId.current) clearInterval(intervalId.current);

        intervalId.current = setInterval(() => {
        setAddToBag("Add To Cart");
        clearInterval(intervalId.current); // Clear the interval after one change
        }, 3000);
    };

    // Update the value of isFav, also call the addToFav() function
    const handelSetIsFav = ()=>{
        console.log("add to fav, triggererd")
        addToFav(id);
        setIsFav(true);
    }

    // Update the quanity of the product.
    useEffect( ()=>{
        if (targetProduct?.userQuantity) {
            setCount(targetProduct.userQuantity);
        }
    }, [ targetProduct ])

    // clear  interval if on reload, the setInterval is being triggered
    useEffect(() => {
        return () => {
        if (intervalId.current) clearInterval(intervalId.current);
        };
    }, []);


    return (
        <>
            <div className="flex items-center gap-4">
                <button
                type='button'
                    className="rounded-sm bg-indigo-600 text-white hover:bg-indigo-800 transition-all"
                    onClick={()=>{
                    handleCountDcr();
                    count === 0 && removeProduct( id );
                    }} 
                >
                    <MinusIcon width={40} height={40} />
                </button>

                <span className="border border-black dark:border-white py-2 px-3"> {count} </span>

                <button
                type='button'
                    className="rounded-sm bg-indigo-600 text-white hover:bg-indigo-800 transition-all"
                    onClick={handleCountInr} 
                >
                    <PlusIcon width={40} height={40} />
                </button>
            </div>
            <div className="mt-10 flex gap-4">
                <button
                        type="button"
                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    onClick={()=>{
                        if( count != 0 ) addProduct( id , allProducts , count );
                        handelAddToBag();
                    }}
                    >
                        { addToBag }
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
                    className={` ml-4 flex items-center justify-center rounded-md px-3 py-3 hover:bg-gray-100   ${ isFav ? 'text-red-600 hover:text-red-500' : 'text-gray-400 hover:text-gray-500' }`} onClick={()=>{
                        if( count != 0 ) handelSetIsFav();
                    }}
                    >
                    <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
                    <span className="sr-only">Add to favorites</span>
                </button>
            </div>
        </>

  )
}

export default AddToCart