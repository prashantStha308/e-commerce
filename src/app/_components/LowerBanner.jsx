import React from 'react'
import Image from 'next/image'
import Loading from './loading'

const LowerBanner = ({ product }) => {

    if(!product){
        return <Loading />
    }

    console.log("LOwer Banner: ",product)

  return (
    <>
        <div className="bg-gray-500 text-white dark:bg-gray-800">
          <section className="py-5 mx-auto max-w-screen-xl  sm:flex flex-grow-0 sm:p-5">
            <article className="flex-col justify-center inline-flex self-stretch p-6">
              <h2 className="uppercase font-semibold text-xl">Design</h2>
              <strong className="text-2xl pb-2 font-normal font-sans sm:text-2xl">Our 30 Year Journey</strong>
              <p className="text-sm pb-4 w-5/6 ">Join us as we revisit our roots, tracing the path from bright idea to industry disruptors with a plan to fight climate change while creating beautiful things. </p>
              <button className="font-semibold uppercase rounded-md border-white border p-3 max-w-max hover:bg-gray-600 hover:text-white">Join us</button>
            </article>
            <figure className=' hidden sm:block '>
              <Image 
              src={product.images[0].src}
              alt="Banner" looding="lazy" height={300} width={400} />
            </figure>
          </section>
        </div>

    </>
  )
}

export default LowerBanner