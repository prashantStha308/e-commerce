"use client"
import Image from 'next/image';

const Tiles = ({ item }) => {
  
  return (
    // <Link href={`/product/${item.slug}`}>
      <div className="cursor-pointer m-2 group ">
        <Image
          className="border border-purple-500 mb-1 border-solid rounded-sm w-full h-48 object-cover hover:border-purple-800 p-3 transition-all duration-100 ease-in-out active:border-purple-700"
          alt={item.name}
          src={item.images[0]?.src}
          loading="lazy"
          height={192}
          width={500}
        />
        <h2 className="pt-2 m-0 mb-2 leading-4 text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-50 ">{item.name}</h2>

        <div className='grid gap-2 '>
          <div>
          {
              item.sale_price === item.regular_price ?
                (
                    <span className='text-gray-900 dark:text-gray-50  text-base'>NRP. {item.regular_price}</span>
                )
              : (
                <p>
                  <span className='text-gray-900 dark:text-gray-50 text-left text-xl'>NRP. <span className='line-through text-lg opacity-55' >{item.regular_price}</span> {item.sale_price}</span>
                </p>
              ) 
            }
            {item.stock_status ? (
              <p className="text-green-500 italic font-medium">In Stock</p>
            ) : (
              <p className="text-red-500 italic font-medium">Out of Stock</p>
            )}
          </div>

        </div>

      </div>
    // </Link>
  );
};

export default Tiles;