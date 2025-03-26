"use client"
import Image from "next/image"
import { useState } from "react"
import Loading from "./loading";

const SearchTile = ({ item }) => {

    const [ isLoading , setIsLoading ] = useState(false);


    if( !item ){
        setIsLoading(true);
    }else{
        setIsLoading(false);
    }
    
  return (
    <>
        { isLoading && <Loading /> }
        <div className=" flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-950 z-50 gap-8 border-b border-purple-500 cursor-pointer hover:bg-purple-500/35" >
            <Image src={item.images[0].src} alt={item.images[0].alt} width={50} height={50} className="w-15 h-15 object-cover" />
            <div className=" w-md text-gray-950 dark:text-white ">
                <h2 className=" text-purple-500 font-bold text-xl">{item.name}</h2>
                {
                item.sale_price === item.regular_price ?
                    (
                        <span className='text-gray-900 dark:text-gray-50  text-sm'>NRP. {item.regular_price}</span>
                    )
                : (
                    <p>
                    <span className='text-gray-900 dark:text-gray-50 text-left text-lg'>NRP. <span className='line-through text-lg opacity-55' >{item.regular_price}</span> {item.sale_price}</span>
                    </p>
                ) 
                }
            </div>
        </div>
    </>
  )
}

export default SearchTile