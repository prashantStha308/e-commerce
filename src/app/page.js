// HOME PAGE

"use client";
import Header from "./_components/Header";
import { useProduct } from "./_store/ContextProvider";
import Tiles from "./_components/Tiles";
import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "./_components/loading";
import LowerBanner from "./_components/LowerBanner";


export default function Home() {

  //Get all the products in contextProvider
  const { products = [] } = useProduct();
  console.log("home",products)

  // using the first 4 products as banners for now
  const bannerProducts = products.slice(0,2);
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
            <h2 className="font-bold uppercase text-xl pb-4">Best sellers</h2>
            <div className="grid grid-flow-row-dense grid-cols-2 gap-3 justify-between sm:grid-cols-3 md:grid-cols-4">

              {/* Map the product array and pass to Tile */}
              {/* Need to insert a contion to be "Best Sellers" */}
              {
                products.map(product =>{
                  return( <Tiles key={product.id} product={product} /> )
                })
              }
            
            </div>
         </>
      }

      </div>

      {products && <LowerBanner product={products[0]} />}

      <Footer />
    </div>
  );
}
