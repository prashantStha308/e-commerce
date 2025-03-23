"use client"
import { useProductStore } from "@/_store/ProductStore";
import Loading from "./loading";
import { RxCrossCircled } from "react-icons/rx";

const Bill = ( { product } ) => {
    const { getProductTotalCost , removeItem } = useProductStore();

    const handleDelete = ()=>{
        removeItem(product.id);
    }

    if( !product ){
        return <Loading />
    }

  return (
    <dl className="flex items-center justify-between gap-4 py-3">
        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            { product.name }
        </dt>

        <dd className="text-base font-medium text-gray-900 dark:text-white flex items-center gap-4">
            <p>
                <span className="text-gray-400"> NRS. { product.price } * {product.amount} : </span> NRS.{ Math.round( getProductTotalCost(product.id) * 100 )/100}
            </p>
            <button className="bg-pink-700/45 p-1 rounded-md hover:bg-red-500 transition-all duration-150 ease-in-out" type="button" onClick={handleDelete} >
                <RxCrossCircled size={23} />
            </button>
        </dd>
    </dl>
  )
}

export default Bill;