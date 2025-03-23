"use client"
import Loading from "@/_components/loading"
import Tiles from "@/_components/Tile"
import { fetchData, fetchProductByCategory } from "@/_store/DataStore"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

const CategoryClient = ({ targetCat }) => {
  const { data : product , isPending , isError } = useQuery({
    queryFn: ()=> targetCat !== "trending" ? fetchProductByCategory( targetCat ) : fetchData("products") ,
    queryKey: [`${targetCat} - CategoryItem`]
  })

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
  
  return (
    <div className="p-4" >
      {
        product.length > 0
        ?
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4">
            {
              targetCat !== "trending"
              ?
                product.map( (item , index) =>{
                  return (
                    <Link key={index} href={`/category/${targetCat}/${item.slug}`}>
                      <Tiles item={item} />
                    </Link>
                  )
                } )
              :
                product.sort((a, b) => b.total_sales - a.total_sales).slice(0,5).map( (item , index) => (
                  <Link key={index} href={`/category/${targetCat}/${item.slug}`} >
                    <Tiles item={item} />
                  </Link>
                ) )
            }
          </div>
        :
          <div className="min-h-screen grid justify-center items-center" >
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center font-bold text-gray-900 dark:text-white w-3xl">
              No Product in "{targetCat}" currently 
            </h1>
          </div> 
      }
    </div>
  )
}

export default CategoryClient

