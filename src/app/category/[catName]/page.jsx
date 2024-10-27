"use client";
import Header from "@/app/_components/Header";
import CatSubNav from "@/app/_components/CatSubNav";
import Footer from "@/app/_components/Footer";
import Tiles from "@/app/_components/Tiles";
import { useProduct } from "@/app/_store/ContextProvider";
import { use } from 'react';

// auth 1.0

function Category({ params }) {
  const { catName } = use(params);
  const products = useProduct();

  const category = products.filter((p) => p.category === catName);


  return (
    <section id="category">
      <Header currentPage="category" />
      <CatSubNav currentPage={catName} />
      <div className="bg-white dark:bg-black">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {catName}
          </h2>
          {category.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {category.map((product) => (
                <Tiles key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <h1 className="m-10 text-2xl text-center font-bold text-gray-900 dark:text-white">
              No Products found
            </h1>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Category;
