"use client"
import { useProduct } from "../_store/ContextProvider";
import Loading from "./loading";


const Bill = ( { product } ) => {
    const { productTotal } = useProduct();

    if( !product ){
        return <Loading />
    }

  return (
    <dl className="flex items-center justify-between gap-4 py-3">
        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
            { product.name }
        </dt>

        <dd className="text-base font-medium text-gray-900 dark:text-white">
            <span className="text-gray-500"> NRS. { product.price } X {product.userQuantity} : </span> NRS.{ Math.round( productTotal(product.id) * 100 )/100}
        </dd>
    </dl>
  )
}

export default Bill;