import React from 'react'
import Loading from './loading'

const Banner = ( {product} ) => {

  if(!product){
    return <Loading />
  }

  // styles for banner
  const imgStyle = {
    backgroundImage: `url(${product.images[0].src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `15rem auto`,
    backgroundPosition: 'center',
  }

  console.log("upper Baner: ", product);

  return (
    <div className="flex relative text-center">
        {/* <h1 className="text-3xl tracking-wider text-gray-800 dark:text-gray-200 text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">Welcome to NovaNest </h1> */}
        <div className=" h-72 object-cover block mx-auto  sm:block sm:w-full" style={imgStyle} >
        </div>
    </div>

    )
}

export default Banner
