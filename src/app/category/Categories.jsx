"use client";

import React from 'react';
import Tiles from '@/app/_components/Tiles';
import { useProduct } from '@/app/_store/ContextProvider';

const Categories = ({ targetCat = 'all' }) => {
  const { products = [], categories = [] } = useProduct();

  // Filter products based on the target category
  const target = targetCat === 'all'
  ? products // Show all products if 'all' is selected
  : products.filter((item) => {
      let hasMatchingCategory = false; // flag to know if matching category found
      
      item.categories.forEach((category) => {
          if (category.slug && category.slug.toLowerCase() === targetCat.toLowerCase()) {
              hasMatchingCategory = true; // If match found, set true
          }
      });
      return hasMatchingCategory; // Return true if a match was found
  });


  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {targetCat === 'all' ? 'All Products' : targetCat.toUpperCase()}
      </h2>

      {target.length > 0 ? (
        <div className="grid grid-flow-row-dense grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {target.map((products) => (
            <Tiles key={products.id} product={products} />
          ))}
        </div>
      ) : (
        <h1 className="m-10 text-2xl text-gray-900 dark:text-white text-center font-bold">
          No Products found
        </h1>
      )}
    </div>
  );
};

export default Categories;
