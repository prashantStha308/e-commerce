import { useProductAtCheckout } from "../_store/store"

const Bill = ( { product } ) => {
    


  return (
    <dl className="flex items-center justify-between gap-4 py-3">
        <dt className="text-base font-normal text-gray-500 dark:text-gray-400"> { product.title } </dt>
        <dd className="text-base font-medium text-gray-900 dark:text-white">${  } </dd>
    </dl>
  )
}

export default Bill