"use client"
import Image from 'next/image';
import Link from 'next/link';

const Tiles = ({ product }) => {

  
  return (
    <Link href={`/product/${product.id}`}>
      <div className="tile cursor-pointer">
        <Image
          className="border border-yellow-700 mb-1 border-solid w-full h-48 object-cover hover:border-yellow-500 p-3"
          alt={product.name}
          src={product.images[0]?.src}
          loading="lazy"
          height={192}
          width={500}
        />
        <h2 className="pt-2 m-0 leading-4 font-semibold">{product.name}</h2>
        <p>$ {product.price} </p>
        {product.stock_status ? (
          <p className="text-green-500 italic font-medium">In Stock</p>
        ) : (
          <p className="text-red-500 italic font-medium">Out of Stock</p>
        )}
      </div>
    </Link>
  );
};

export default Tiles;
