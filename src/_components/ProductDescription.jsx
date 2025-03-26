import React from 'react'

const ProductDescription = ({ target }) => {
  return (
    <>
        {/* Description */}
        <div>
            <h3 className='text-xl text-gray-900 dark:text-gray-100'> Additonal Details </h3>
            <div className="mt-6 space-y-6 text-gray-900 dark:text-gray-300 text-xl">
                {target.description.replace('<p>','').replace('</p>', '') || "No description available" }
            </div>
        </div>
    </>
  )
}

export default ProductDescription;