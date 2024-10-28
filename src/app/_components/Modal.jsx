import { XMarkIcon } from '@heroicons/react/20/solid'

const Modal = () => {

    const title = " Added To Bag ";
    const description = `Your product has been added to bag.
                            Click Checkout to go to Checkout page`
  return (
    <section className=' flex fixed p-6 rounded-md bg-emerald-600 left-1/2 transform -translate-x-1/2 animate-modalMove'>

        <div className=' grid gap-3 '>

            <h1 className=' font-bold text-xl'> { title } </h1>
            <p className=' flex break-before-auto ' > { description } </p>

        </div> 

        <div>
            <button>
                <XMarkIcon width={20} height={20} />
            </button>
        </div>

    </section>
  )
}

export default Modal