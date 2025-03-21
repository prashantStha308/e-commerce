"use client"

import AddToCart from '@/_components/AddToCart';
import Loading from '@/_components/loading';
import { fetchData } from '@/_store/ProductStore';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ProductClient = ({ pid }) => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: [`Product: ${pid}`],
    queryFn: () => fetchData(`products/${pid}`),
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // Handle any errors
  }

  const targetProduct = data;


  // If no product is found, show a "Product not found" message
  if (!targetProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className='h-full'>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        {/* Product Image */}
        <div className="w-full">
          <div key={targetProduct.id}>
            <div
              className="h-72 w-full bg-cover bg-center sm:rounded-lg"
              style={{ backgroundImage: `url(${targetProduct.images[0]?.src})`, backgroundSize: '15rem auto', backgroundRepeat: 'no-repeat' }}
              aria-label={targetProduct.name}
            ></div>
          </div>
        </div>

        {/* targetProduct Info */}
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{targetProduct.name}</h1>
          <div className="mt-3">
            <p className="text-xl md:text-2xl tracking-tight text-gray-900 dark:text-white">
              NPR. <span className='line-through opacity-45 mr-2 '>  {targetProduct.regular_price} </span> {targetProduct.price}
            </p>
          </div>

          {/* Short Description */}
          <div className="mt-6 space-y-6 text-base text-gray-900 dark:text-gray-300">
            {targetProduct.short_description.replace('<p>','').replace('</p>', '') || "No description available"}
          </div>

          {/* Add to Cart */}
          <form className="mt-6">
            <AddToCart product={targetProduct}  />
          </form>

        </div>
      </div>
    </div>
  );
};

export default ProductClient;
