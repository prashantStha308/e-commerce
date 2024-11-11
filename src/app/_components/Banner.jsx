import React from 'react'
import Loading from './loading'

const Banner = ( {product} ) => {

  if(!product){
    return <Loading />
  }

  // styles for banner
  const imgStyle = {
    backgroundImage: `url(${product.images[0]?.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: `15rem auto`,
    backgroundPosition: 'center',
  }

  return (
    <div className="flex relative text-center">
        <div className=" h-72 object-cover mx-auto block w-full " style={imgStyle} >
        </div>
    </div>
    )
}

export default Banner
