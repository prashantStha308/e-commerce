"use client"

import { useProduct } from "../_store/ContextProvider";
import { useState , useEffect } from "react";
import Loading from "./loading";

const Bill = ( { product } ) => {
    // Importing 'productTotal' function form useProductAtCheckout()
    const { productTotal } = useProduct();

    console.log(product)

    if( !product ){
        return <Loading />
    }

    console.log("product: ",product)
    console.log("Qty: ",product.userQuantity)


  return (
    <dl className="flex items-center justify-between gap-4 py-3">
        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            { product.name }
        </dt>

        <dd className="text-base font-medium text-gray-900 dark:text-white">
            <span className="text-gray-500"> NRS. { product.price } X {product.userQuantity} : </span> NRS.{ Math.round( productTotal(product.id) * 100 )/100}
        </dd>
    </dl>
  )
}

export default Bill;