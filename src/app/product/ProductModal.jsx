'use client'
 
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon , ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';



export default function Modal({ onClose , product }) {


  return (
    <section id="product" className='w-full h-full fixed top-0 left-0 bottom-0 right-0 overflow-y-scroll'>
      <Header currentPage={'product'} />
      <div className="bg-white dark:bg-gray-800">
        <ArrowLeftCircleIcon className="w-14 absolute left-7 hover:text-blue-600 cursor-pointer" onClick={onClose} />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

              <div className=" w-full ">
                  <div key={product.id}>
                  <div
                    className="h-72 w-full bg-cover bg-center sm:rounded-lg"
                    style={{ backgroundImage: `url(${product.images})`, backgroundSize: '15rem auto' , backgroundRepeat: 'no-repeat' }}
                    aria-label={product.title}
                  ></div>

                  </div>
              </div>


            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900 dark:text-white "> $. {product.price}</p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className='text-indigo-500'
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="space-y-6 text-base text-gray-700"
                />
              </div>

              <form className="mt-6">


                <div className="mt-10 flex">
                  <button
                    type="submit"
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                  >
                    Add to bag
                  </button>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                  >
                    <HeartIcon aria-hidden="true" className="h-6 w-6 flex-shrink-0" />
                    <span className="sr-only">Add to favorites</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12 text-black dark:text-white">
                <h2 id="details-heading">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                <Disclosure key={product.id} as="div">
                    <h3>
                      <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                        <span className="text-sm font-medium text-gray-900 dark:text-white group-data-[open]:text-indigo-600">
                          {/* {product.desc} */}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="block h-6 w-6 text-gray-400 dark:text-gray-100 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-data-[open]:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="hidden h-6 w-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                  </Disclosure>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
