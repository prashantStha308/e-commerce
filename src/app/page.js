// HOME PAGE

"use client";
import Header from "./_components/Header";
import Tiles from "./_components/Tiles";
import Banner from "./_components/Banner";
import { useEffect, useState } from "react";
import Loading from "./_components/loading";
import LowerBanner from "./_components/LowerBanner";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./_store/store";


export default function Home() {

  // get products from useQuery
  const { data: products =[] , isLoading , error } = useQuery({
    queryFn: () => fetchData("products"),
    queryKey: ['fetchProducts']
  })

  // using the top 5 products as banners for now
  const bannerProducts = products.sort( (a,b)=>( b.total_sales - a.total_sales ) ).slice(0,5);
  const [ currentBanner , setCurrentBanner ] = useState(0);

  // For banner
  useEffect(() => {
    // Set an interval to change the banner every 3 seconds
    const intervalId = setInterval(() => {
      // Update the currentBanner state to cycle through bannerProducts
      setCurrentBanner(prevBanner => (prevBanner + 1) % bannerProducts.length);
    }, 3000);

    return ()=>clearInterval(intervalId);
  }, [bannerProducts.length]);


  return ( 
    <div id="Home">
      <Header currentPage={'home'} />

      {/* Banner */}
      <div className="bg-white dark:bg-black">
        <Banner product={bannerProducts[currentBanner]} />
      </div>
        
        {/* Product Tiles */}
      <div className="p-5 mx-auto max-w-screen-xl">
      {
        products.length === 0 ?
         <Loading />:
         <>
            <h2 className="font-bold text-gray-900 dark:text-gray-100 uppercase text-xl pb-4">Best sellers</h2>
            <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

              {/* Show only top 10 products */}
              {
                products.sort((a,b)=>( b.total_sales - a.total_sales )).slice(0,10).map(product => <Tiles key={product.id} product={product} />)
              }
            
            </div>
         </>
      }

      </div>

      {products && <LowerBanner product={products[0]} />}
    </div>
  );
}
