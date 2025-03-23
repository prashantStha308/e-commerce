"use client"

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useProductStore } from '@/_store/ProductStore'
import useUserStore from '@/_store/UserStore'
import Modal from '@/_components/Modal'
import UserDetail from '@/_components/UserDetail'
import Bill from '@/_components/Bill'

const CheckoutClient = () => {
    // Importing required fields from useproductsAtCheckout
    const { cart , getTotalCost  } = useProductStore();
    const { user , isLogged } = useUserStore();
    const [ totalPrice , setTotalPrice ] = useState(0);
    // formData
    const [ formData , setFormData ] = useState({
        name:"",
        email:"",
        country: "",
        city: "",
        phoneNumber: "",
        companyName: "",
        postCode: ""
    });

    useEffect( () => {
        if(isLogged){
            console.log("User: ",user);
            setFormData({
                name: `${user.first_name || ""} ${user.last_name || ""}`.trim(),
                email: user.email,
                country: user.shipping.country || "",
                city: user.shipping.city || "",
                phoneNumber: user.shipping.phone || "",
                companyName: user.shipping.company,
                postCode: user.shipping.postcode || ""
            })
        }
    } , [ isLogged , user ] )

    useEffect(()=>{
        if (cart.length) {
            const calculatedTotal = getTotalCost();
            setTotalPrice(Math.round((calculatedTotal ?? 0) * 100) / 100);
        } else {
            setTotalPrice(0); 
        }
    },[cart.length , getTotalCost ])

    useEffect( ()=>{
        setTimeout( ()=>{
            if( !isLogged ){
                return <Modal title={'Not Logged In'} message={'Please login to continue'} login={true} />
            }
        } , 100 )
    } , [isLogged] )

  return (
    <section className="min-h-screen bg-white antialiased dark:bg-gray-900">
        <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">

                {/* User Details*/}
                <UserDetail formData={formData} setFormData={setFormData} />

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
                    <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-purple-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 dark:bg-primary-600 dark:hover:bg-primary-700 outline-none">Proceed to Payment</button>

                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more items in your cart require an account. <Link href="/signin" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</Link>.</p>
                </div>
            </div>
            </div>
        </form>
    </section>
  )
}

export default CheckoutClient