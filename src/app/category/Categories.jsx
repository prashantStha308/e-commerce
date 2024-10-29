"use client"

import React from 'react'
import Tiles from '@/app/_components/Tiles'
import { useProduct } from '@/app/_store/ContextProvider';

const Categories = ({ targetCat }) => {

  const product = useProduct();
  let target;

//   if target doesn't exist, exit/
  if( !targetCat ){
    return
  }

//   if target is others, filter items.
  if( targetCat === 'others' ){

    target = product.filter( items=>{
        return ( items.category !== 'beauty' && items.category !== 'art' || items.category === 'undefined' || items.category === "others"  )
    } )
  }else{

    target = product.filter( product=>{
        return ( product.category === targetCat )
    } )

    }

  return (  

    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100"> {targetCat.toUpperCase()} </h2>
        {
            target.length > 0 ?
            <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
                {
                    target.map(product => {
                        return (<Tiles key={product.id} product={product} />)
                    })
                }
            </div> :
            <h1 className='m-10 text-2xl text-gray-900 dark:text-white text-center font-bold'>
                No Products found
            </h1>
        }
    </div>
  )
}

export default Categories;