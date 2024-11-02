"use client";
import React, { useEffect, useState, useRef } from 'react';
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useProduct } from '../_store/ContextProvider';

const AddToCart = ({ id }) => {
    const { cart = [] , addProduct, removeProduct } = useProduct();

    const [count, setCount] = useState(0);
    const [addToBag, setAddToBag] = useState("Add To Cart");
    const [targetCart , setTargetCart] = useState([]);
    const intervalId = useRef(null);

    // Find the target product whenever the product list changes
    useEffect(() => {
        const foundCart = cart.find(item => item.id === id);
        setTargetCart(foundCart);
    }, [cart, id]);

    // Update the count based on targetProduct's userQuantity
    useEffect(() => {
        if (targetCart?.userQuantity) {
            console.log("Updating Count: ", targetCart.userQuantity); // Debug log
            setCount(targetCart.userQuantity);
        } else {
            console.log("No userQuantity found for targetCart."); // Debug log
        }
    }, [targetCart]);

    // Increment and decrement functions
    const handleCountInr = () => {
        setCount(prev => prev + 1);
    };

    const handleCountDcr = () => {
        setCount(prev => Math.max(0, prev - 1));
        if (count === 1) {
            removeProduct(id);
        }
    };

    // Handle adding to the bag
    const handelAddToBag = () => {
        setAddToBag("Added To Cart");
        if (intervalId.current) clearInterval(intervalId.current);
        intervalId.current = setTimeout(() => {
            setAddToBag("Add To Cart");
        }, 3000);
    };

    // CLear interval on refresh, if setINterval still is triggered
    useEffect(() => {
        return () => {
            if (intervalId.current) clearTimeout(intervalId.current);
        };
    }, []);

    const handleAddToCart = () => {
        if (count > 0) {
            addProduct(id, count);
            setCount(count); 
            handelAddToBag();
        }
    };

    return (
        <>
            <div className="flex items-center gap-4">
                <button
                    type='button'
                    className="rounded-sm bg-indigo-600 text-white hover:bg-indigo-800 transition-all"
                    onClick={handleCountDcr}
                >
                    <MinusIcon width={40} height={40} />
                </button>

                <span className="border border-black dark:border-white py-2 px-3">{count}</span>

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
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    onClick={handleAddToCart}
                >
                    {addToBag}
                </button>

                <Link href={`/checkout/${id}`}>
                    <button
                        type="button"
                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700">
                        Checkout
                    </button>
                </Link>

                {/* <button
                    type="button"
                    className={`ml-4 flex items-center justify-center rounded-md px-3 py-3 hover:bg-gray-100 ${fav ? 'text-red-600 hover:text-red-500' : 'text-gray-400 hover:text-gray-500'}`}
                    onClick={handelsetFav}
                >
                    <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
                    <span className="sr-only">Add to favorites</span>
                </button> */}
            </div>
        </>
    );
}

export default AddToCart;
