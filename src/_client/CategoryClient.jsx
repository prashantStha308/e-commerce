"use client"
import Loading from "@/_components/loading"
import Tiles from "@/_components/Tile"
import { fetchData, fetchProductByCategory } from "@/_store/DataStore"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { Search } from "lucide-react";
import { useState , useEffect } from "react";


const CategoryClient = ({ targetCat }) => {
  const { data : product , isPending , isError } = useQuery({
    queryFn: ()=> targetCat !== "trending" ? fetchProductByCategory( targetCat ) : fetchData("products") ,
    queryKey: [`${targetCat} - CategoryItem`]
  })
  const [ keyword , setKeyword ] = useState("");
  const [ targetProducts , setTargetProducts ] = useState([]);

  useEffect(() => {
    if (product) {
      setTargetProducts(
        keyword
          ? product.filter(item =>
              item.name.toLowerCase().includes(keyword.toLowerCase()) // More flexible search
            )
          : product
      );
    }
  }, [product, keyword]);

  if( isPending ){
    return <Loading />
  }

  if( isError ){
    return(
      <div>
        Error occured
      </div>
    )
  }

  const handleSearchInput= (e) => {
    setKeyword(e.target.value);
  }

  return (
    <div>

      <div id="searchBar" className="flex justify-between p-4" >
      <div></div>
      
      <div id="searchBar-main" className="flex w-lg justify-between items-center border border-gray-400 rounded-lg px-4 py-2">
          <input 
              type="text" 
              name="keyword" 
              id="search-word" 
              placeholder={ `Search ${targetCat} Products` }
              className="p-1 text-sm outline-none w-full"
              value={keyword}
              onChange={handleSearchInput}
          />
          <button className="border-l border-gray-400 px-2">
              <Search />
          </button>
      </div>

      <div></div>  
      </div>

      <div className="p-4" >
        {
          targetProducts.length > 0
          ?
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
              {
                targetCat !== "trending"
                ?
                  targetProducts.map( (item , index) =>{
                    return (
                      <Link key={index} href={`/category/${targetCat}/${item.slug}`}>
                        <Tiles item={item} />
                      </Link>
                    )
                  } )
                :
                  targetProducts.sort((a, b) => b.total_sales - a.total_sales).slice(0,5).map( (item , index) => (
                    <Link key={index} href={`/category/${targetCat}/${item.slug}`} >
                      <Tiles item={item} />
                    </Link>
                  ) )
              }
            </div>
          :
            <div className="min-h-screen grid justify-center items-center" >
              <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold text-gray-900 dark:text-white w-3xl">
                {
                  product.length < 0 ?
                    <span>No Product in "{targetCat}" currently </span>
                  :
                    <span>No Product with keywords "{keyword}" </span> 
                }
              </h1>
            </div> 
        }
      </div>
    </div>
  )
}

export default CategoryClient

