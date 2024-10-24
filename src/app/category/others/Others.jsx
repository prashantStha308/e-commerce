import React from 'react'
import Tiles from '@/app/components/Tiles'
import { useProduct } from '@/app/ContextProvider';

const Others = () => {

    const products = useProduct();
    const otherProducts = products.filter(items=>{
      return ( items.category !== 'beauty' && items.category !== 'art' )
    })

  return (
    <div className="bg-white dark:bg-black mb-4">

        {/* Others */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100"> Others: </h2>

            {
                otherProducts.length > 0 ?
                <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

                    {
                        otherProducts.map(product =>{
                        return( <Tiles key={product.id} product={product} /> )
                        })
                    }
                </div> :
                <h1 className='m-10 text-2xl text-gray-900 dark:text-white text-center font-bold'>
                    No Products found
                </h1>
            }

        </div>
    </div>
  )
}

export default Others;