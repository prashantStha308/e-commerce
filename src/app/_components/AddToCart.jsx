"use client";
import React, { useEffect, useState, useRef } from 'react';
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useProduct } from '../_store/ContextProvider';
import { useUser } from '../_store/UserContext';
import Modal from './Modal';
import { useRouter } from 'next/navigation';

const AddToCart = ({ target = {} }) => {
    const { cart = [], addProduct, removeProduct } = useProduct();
    const { isLogged } = useUser();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [addToBag, setAddToBag] = useState("Add To Cart");
    const [targetCart, setTargetCart] = useState([]);
    const intervalId = useRef(null);

    useEffect(() => {
        const foundCart = cart.find(item => item.id === target.id);
        setTargetCart(foundCart);
    }, [cart, target]);

    useEffect(() => {
        if (targetCart?.userQuantity) {
            setCount(targetCart.userQuantity);
        }
    }, [targetCart]);

    const handleCountInr = () => setCount(prev => prev + 1);

    const handleCountDcr = () => {
        setCount(prev => Math.max(0, prev - 1));
        if (count === 1) {
            removeProduct(target.id);
        }
    };

    const handelAddToBag = () => {
        setAddToBag("Added To Cart");
        if (intervalId.current) clearInterval(intervalId.current);
        intervalId.current = setTimeout(() => {
            setAddToBag("Add To Cart");
        }, 3000);
    };

    useEffect(() => {
        return () => {
            if (intervalId.current) clearTimeout(intervalId.current);
        };
    }, []);

    const handleAddToCart = () => {
        if (isLogged) {
            if (count > 0) {
                addProduct(target, count);
                handelAddToBag();
            }
        } else {
            setIsOpen(true);
        }
    };

    const handelCheckout= ()=>{
        if(isLogged){
            setIsOpen(false)
            router.push('/checkout')
        }else{
            setIsOpen(true)
        }
    }

    const handelModalClose = () => setIsOpen(false);

    return (
        <>
            {(isLogged || isOpen) && (
                <Modal onClose={handelModalClose} title="Not Logged in" message="Please Log in to add the product to your cart and checkout" login={true} />
            )}
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="rounded-sm bg-indigo-600 text-white hover:bg-indigo-800 transition-all"
                    onClick={handleCountDcr}
                >
                    <MinusIcon width={40} height={40} />
                </button>

                <span className="border border-black dark:border-white text-gray-900 dark:text-gray-100 py-2 px-3">{count}</span>

                <button
                    type="button"
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

                <button
                    type="button"
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white hover:bg-indigo-700" onClick={handelCheckout}
                >
                    Checkout
                </button>
            </div>
        </>
    );
};

export default AddToCart;
