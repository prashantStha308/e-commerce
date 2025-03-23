"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Tile from "@/_components/Tile";
import Banner from "@/_components/Banner";
import Loading from "@/_components/loading";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { fetchData } from "@/_store/DataStore";

export default function Home() {

  const queryClient = useQueryClient();
  const query = useQuery({
    queryFn: () => fetchData("products"),
    queryKey: ['fetchedProduct'],
  });

  const products = query.data ?? [];
  const bnrImg = products.slice(0, 4);

  if (query.isLoading) return <div> <Loading /> </div>;
  if (query.error) return <div>Error fetching data</div>;

  // reference
  // https://github.com/tomatoweb/e-shop-next/blob/starter/src/components/Slider.tsx

  return (
    <section id="home" className="px-1 py-4 grid gap-4" >
        <Banner slides={bnrImg} />
        <div className="grid gap-2 px-2" >
          <div>
            
              <h1 className="text-2xl md:text-3xl lg:text-4xl flex gap-2 items-end" > Trending right now
                <Link href={"/category/trending"}>
                  <span className="flex items-center text-purple-400 text-sm md:text-lg lg:text-xl hover:underline active:text-purple-700"> See more..<MdKeyboardArrowRight /> </span>
                </Link>
              </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            {
              products.slice(0,6).map( (item , index) =>{
                return(
                  <Link key={index} href={`/product/${item.slug}`} >
                    <Tile item={item} />
                  </Link>
                )
              } )
            }
          </div>
        </div>
    </section>
  );
}
