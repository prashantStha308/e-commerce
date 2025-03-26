"use client"

import AddToCart from '@/_components/AddToCart';
import Loading from '@/_components/loading';
import { fetchDataBySlug } from '@/_store/DataStore';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Tab from "@/_components/Tab.jsx";
import Recommendation from "@/_components/Recommendation.jsx"


const ProductClient = ({ slug }) => {
  
  const { data, isPending, isError, error } = useQuery({
    queryKey: [`Product: ${slug}`],
    queryFn: () => fetchDataBySlug( "products" , slug ),
  });

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>; // Handle any errors
  }

  const targetProduct = data;
  if (!targetProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className='h-full py-10 '>
      <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-4">
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
          <div className=" text-base text-gray-900 dark:text-gray-300 py-4 grid gap-2">
            <h2 className={"text-xl md:text-2xl lg:text-3xl font-bold text-left"} > Description </h2>
            <p className={"text-left text-lg"} >{targetProduct.short_description.replace('<p>','').replace('</p>', '') || "No description available"}</p>
          </div>

          {/* Add to Cart */}
          <form className="mt-6">
            <AddToCart target={targetProduct}  />
          </form>

        </div>
      </div>
      <Tab target={targetProduct} />
      <Recommendation product={ targetProduct } />
    </div>
  );
};

export default ProductClient;
