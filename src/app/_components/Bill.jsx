"use client"

import { useProductAtCheckout } from "../_store/store"
import { useState , useEffect } from "react";

const Bill = ( { product } ) => {
    // Importing 'productTotal' function form useProductAtCheckout()
    const { productTotal } = useProductAtCheckout();
  // Creating a state variable for product's total price
    const [ productPrice , setProductPrice ] = useState(0)

    // upadting productPrice's value each time product and productTotal's values are changed. 
    useEffect(()=>{
        if (product) {
            const calculated = productTotal(product.id);
            setProductPrice(Math.round((calculated ?? 0) * 100) / 100);
        } else {
            setProductPrice(0); 
        }
    },[product , productTotal ])


  return (
    <dl className="flex items-center justify-between gap-4 py-3">
        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            { product.title }
        </dt>

        <dd className="text-base font-medium text-gray-900 dark:text-white">
            <span className="text-gray-500"> ${ product.price } X {product.userQuantity} : </span> ${ productPrice}
        </dd>
    </dl>
  )
}

export default Bill;