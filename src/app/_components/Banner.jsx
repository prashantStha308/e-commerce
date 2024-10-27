import React from 'react'

const Banner = ( {product} ) => {
  console.log("Banner Product: ",product);

  const imgStyle = {
    backgroundImage: `url(${product.images})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `15rem auto`,
    backgroundPosition: 'center',
  }

  return (

    <div className="flex relative text-center">
        {/* <h1 className="text-3xl tracking-wider text-white text-sha uppercase font-bold p-4 self-center z-10 content-center absolute text-center w-full md:text-4xl">Welcome to Lightning deals</h1> */}
        <div className=" h-72 object-cover block mx-auto  sm:block sm:w-full" style={imgStyle} >
        </div>
    </div>

    )
}

export default Banner
