import React from 'react'
import { useUser } from '../_store/UserContext';
import { useState } from 'react';

const UserDetail = () => {

    const { currentUser } = useUser();

    const [ name , setName ] = useState(currentUser.first_name + ' ' + currentUser.last_name )
    const [ email , setEmail ] = useState( currentUser.email );
    const [ country , setCountry ] = useState(currentUser.billing.country);
    const [ city , setCity ] = useState( currentUser.billing.city );
    const [ company , setCompany ] = useState( currentUser.billing.company );
    const [ postal , setPostal ] = useState( currentUser.billing.postcode )
    const [ phone , setPhone ] = useState( currentUser.billing.phone )


    const handelName = (e)=>( setName( e.target.value ) );
    const handelEmail = (e)=>( setEmail( e.target.value ) );
    const handelCountry = (e)=>( setCountry( e.target.value ) );
    const handelCity= (e)=>( setCity( e.target.value ));
    const handelCompany = (e)=>( setCompany( e.target.value ) );
    const handelPostal = (e)=>( setPostal( e.target.value ) );
    const handelPhone = (e)=>( setPhone( e.target.value ) );

  return (
    <>
        {/* User Details*/}
        <div className="min-w-0 flex-1 space-y-8 ">
            <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full name */}
                <div>
                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your Full name </label>
                    <input type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={name} onChange={handelName} required />
                </div>
                {/* Email */}
                <div>
                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Your email* </label>
                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={email} onChange={handelEmail} required />
                </div>
                {/* Country */}
                <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-900 dark:text-white"> Country* </label>
                        <input type="text" id="country" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={country} onChange={handelCountry} required />
                </div>
                {/* City */}
                <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-900 dark:text-white"> City* </label>
                        <input type="text" id="city" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={city} onChange={handelCity} required />
                </div>
                {/* Phone number */}
                <div>
                    <label htmlFor="phone-input-3" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Phone Number* </label>
                    <input type="number" id="phone-input" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={handelPhone} required />
                </div>
                {/* Company name */}
                <div>
                    <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Company name </label>
                    <input type="text" id="company_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={company} onChange={handelCompany} />
                </div>
                {/* Post Code */}
                <div>
                <label htmlFor="post_code" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Post Code</label>
                <input type="text" id="post_code" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" value={postal} onChange={handelPostal} required />
                </div>
                {/* Add new address */}
                <div className="sm:col-span-2">
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                    <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7 7V5" />
                    </svg>
                    Add new address
                </button>
                </div>
            </div>
            </div>

            {/* Payment methonds */}
            <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" defaultChecked />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 dark:text-white"> Credit Card </label>
                    <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Pay with your credit card</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="pay-on-delivery" aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white"> Payment on delivery </label>
                    <p id="pay-on-delivery-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">+$15 payment processing fee</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="paypal-2" aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="paypal-2" className="font-medium leading-none text-gray-900 dark:text-white"> Paypal account </label>
                    <p id="paypal-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Connect to your account</p>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Delete</button>

                    <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>

                    <button type="button" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Edit</button>
                </div>
                </div>
            </div>
            </div>

            {/* Delivery Methods */}
            <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" defaultChecked />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="dhl" className="font-medium leading-none text-gray-900 dark:text-white"> $15 - DHL Fast Delivery </label>
                    <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Tommorow</p>
                    </div>
                </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="fedex" aria-describedby="fedex-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="fedex" className="font-medium leading-none text-gray-900 dark:text-white"> Free Delivery - FedEx </label>
                    <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it by Friday, 13 Dec 2023</p>
                    </div>
                </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                    <div className="flex h-5 items-center">
                    <input id="express" aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    </div>

                    <div className="ms-4 text-sm">
                    <label htmlFor="express" className="font-medium leading-none text-gray-900 dark:text-white"> $49 - Express Delivery </label>
                    <p id="express-text" className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">Get it today</p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Promo cide */}
            <div>
            <label htmlFor="voucher" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Enter a gift card, voucher or promotional code </label>
            <div className="flex max-w-md items-center gap-4">
                <input type="text" id="voucher" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
                <button type="button" className="flex items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Apply</button>
            </div>
            </div>
        </div>
    </>
  )
}

export default UserDetail