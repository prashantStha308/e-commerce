// Product Details
"use client";

import { StarIcon } from '@heroicons/react/20/solid';
import AddToCart from '@/app/_components/AddToCart';
import { useProduct } from '@/app/_store/ContextProvider';
import Loading from '@/app/_components/loading';

const ProductDetails = ({ productId }) => {
  const { products = [] } = useProduct();

  // find the product whose details are to be set
  const target = products.find(item => item.id == productId);

  // Load until the target is found
  if (!target) {
    return <Loading />
  }

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      {/* Product Image */}
      <div className="w-full">
        <div key={target.id}>
          <div
            className="h-72 w-full bg-cover bg-center sm:rounded-lg"
            style={{ backgroundImage: `url(${target.images[0]?.src})`, backgroundSize: '15rem auto', backgroundRepeat: 'no-repeat' }}
            aria-label={target.name}
          ></div>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{target.name}</h1>
        <div className="mt-3">
          <p className="text-3xl tracking-tight text-gray-900 dark:text-white">$. {target.price}</p>
        </div>

        {/* Reviews */}
        {/* <div className="mt-3">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon width={20} height={20} key={rating} aria-hidden="true" className="text-indigo-500" />
            ))}
            <p className="sr-only">{target.rating} out of 5 stars</p>
          </div>
        </div> */}

        {/* Description */}
        <div className="mt-6 space-y-6 text-base text-gray-700">
          {target.description}
        </div>

        {/* Add to Cart */}
        <form className="mt-6">
          <AddToCart id={target.id}  />
        </form>

      </div>
    </div>
  );
};

export default ProductDetails;
