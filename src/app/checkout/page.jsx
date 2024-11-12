"use client"

import Bill from '@/app/_components/Bill'
import Header from '@/app/_components/Header'
import { useProduct } from '@/app/_store/ContextProvider'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useUser } from '../_store/UserContext'
import Modal from '../_components/Modal'
import UserDetail from './_userDetail'

const Checkout = () => {
    // Importing required fields from useproductsAtCheckout
    const { cart=[] , completeTotal  } = useProduct();
    const { isLogged } = useUser();

    // setting up state for totalPrice
    const [ totalPrice , setTotalPrice ] = useState(0);


    // Everytime, cart or completeTotal changes, and if cart exists, call completeTotal() and round up the returned value
    useEffect(()=>{
        if (cart) {
            const calculatedTotal = completeTotal();
            setTotalPrice(Math.round((calculatedTotal ?? 0) * 100) / 100);
        } else {
            setTotalPrice(0); 
        }

    },[cart , completeTotal ])


    if( !isLogged ){
        return <Modal title={'Not Logged In'} message={'Please login to continue'} login={true} />
    }


  return (
    <>
        <Header />
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">

                <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                    <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                    <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Cart
                    </span>
                </li>

                <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                    <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                    <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Checkout
                    </span>
                </li>

                <li className="flex shrink-0 items-center">
                    <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    Order summary
                </li>
                </ol>

                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">

                    {/* User Details*/}
                    <UserDetail />

                {/* Items details */}

                <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                    <div className="flow-root">
                        <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">

                            {
                                cart ? cart.map( item =>{
                                    return( <Bill key={item.id} product={item} /> )
                                } ) ?? " " : " "
                            }
                            {/* Total Price */}
                            <dl className="flex items-center justify-between gap-4 py-3">
                            <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                            <dd className="text-base font-bold text-gray-900 dark:text-white">NRS. {totalPrice} </dd>
                            </dl>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Payment</button>

                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <Link href="/signin" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</Link>.</p>
                    </div>
                </div>
                </div>
            </form>
        </section>
    </>
  )
}

export default Checkout