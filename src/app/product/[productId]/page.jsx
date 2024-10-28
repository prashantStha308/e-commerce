import { StarIcon } from '@heroicons/react/20/solid';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import { products } from '@/app/layout';
import AddToCart from '@/app/_components/AddToCart';



export default async function ProductPage({ params }) {

    const { productId } = await params;

    const product = products.find( item =>{
      return (item.id == productId)
    } );


  return (
    <section id="product" className='w-full h-full fixed top-0 left-0 bottom-0 right-0 overflow-y-scroll'>
      <Header currentPage={'product'} />
      <div className="bg-white dark:bg-gray-800">
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

                <div className="space-y-6 text-base text-gray-700">
                  {product.description}
                </div>
              </div>

              <form className="mt-6">

                {/* <Counter id={product.id} /> */}

               <AddToCart id={product.id} />

              </form>

              <section aria-labelledby="details-heading" className="mt-12 text-black dark:text-white">
                <h2 id="details-heading">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  <article className='mt-4 text-left'>
                    <p>
                      {/* product.description */}
                    </p>
                  </article>
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

