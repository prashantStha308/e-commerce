"use client"
import Loading from "@/_components/loading"
import Tiles from "@/_components/Tile"
import { fetchProductByCategory } from "@/_store/DataStore"
import { useQuery } from "@tanstack/react-query"

const CategoryClient = ({ targetCat }) => {
  const { data : product , isPending , isError } = useQuery({
    queryFn: ()=> fetchProductByCategory( targetCat ),
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
              product.map( (item , index) =>{
                return <Tiles item={item} key={index} />
              } )
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

