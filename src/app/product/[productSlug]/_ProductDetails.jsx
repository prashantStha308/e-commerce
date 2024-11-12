// Product Details
"use client";
import AddToCart from '@/app/_components/AddToCart';
import Loading from '@/app/_components/loading';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '@/app/_store/store';
import ProductsTabs from '@/app/_components/_products/ProductsTabs';

const ProductDetails = ({ productSlug }) => {

  const { data: products  = [] , isLoading , error } = useQuery({
    queryFn: () => fetchData("products") ,
    queryKey: ["fetchProducts"]
  })

  // find the product whose details are to be set
  const target = products.find(item => item.slug == productSlug);

  // Load until the target is found
  if (!target) {
    return <Loading />
  }

  return (
    <div className='h-full'>
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
            <p className="text-3xl tracking-tight text-gray-900 dark:text-white">NPR. {target.price}</p>
          </div>

          {/* Short Description */}
          <div className="mt-6 space-y-6 text-base text-gray-900 dark:text-gray-300">
            {target.short_description.replace('<p>','').replace('</p>', '') }
          </div>

          {/* Add to Cart */}
          <form className="mt-6">
            <AddToCart target={target}  />
          </form>

        </div>
      </div>
      <ProductsTabs target={target} />
    </div>
  );
};

export default ProductDetails;
