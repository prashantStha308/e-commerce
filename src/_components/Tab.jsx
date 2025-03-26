"use client"
import React, { useState } from 'react'
import ProductDescription from '@/_components/ProductDescription.jsx';
// import Reviews from './Reviews';

const Tab = ({ target }) => {

    const [ descVisibility , setDescVisibility ] = useState(true);

    const handelVisibility= ( opt )=>{
        
        if( opt === 'desc' ){
            setDescVisibility(true)
        }else{
            setDescVisibility(false)
        }
    }

  return (
    <div className='w-full grid '>
        <div className='' >
            <ul className='flex justify-around w-full text-2xl text-gray-900 dark:text-gray-100 border-b border-b-gray-900 dark:border-b-gray-100 cursor-pointer'>
                <li className='tab' onClick={()=>handelVisibility('desc')} > Description </li>
                <li className='tab' onClick={()=>handelVisibility('rev')} > Reviews </li>
            </ul>
        </div>
        <div className='h-96 mt-4'>
            {
                descVisibility && <ProductDescription target={target} />
            }
        </div>
    </div>
  )
}

export default Tab