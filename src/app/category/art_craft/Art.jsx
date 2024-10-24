import React from 'react'
import Tiles from '@/app/components/Tiles'
import { useProduct } from '@/app/ContextProvider';

const Art = () => {

  const product = useProduct();

  const artProducts = product.filter( product=>{
      return ( product.category === 'art' )
  } )

  return (
    <div className="bg-white dark:bg-black mb-4">

        {/* Art Section */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100"> Art and Crafts </h2>
            {
                artProducts.length > 0 ?
                <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">
                    {
                        artProducts.map(product => {
                            return (<Tiles key={product.id} product={product} />)
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

export default Art