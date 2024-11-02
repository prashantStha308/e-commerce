// Product Page

import Header from '@/app/_components/Header';
import ProductDetails from './_ProductDetails';

export const metadata = {
  title: "NovaNest | Product",
  description: "An e-commerce website. First project using Next.js",
  openGraph: {
    title: "NovaNest | Product",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "NovaNest | Product",
    description: "An e-commerce website. First project using Next.js",
    image: "https://e-commerce-zeta-tawny.vercel.app/ogLogo.png", 
  }
};


export default async function ProductPage({ params }) {

  // await the productId from the url.
  const { productId } = await params;

  const pId = productId;

  return (
    <section id="product" className='w-full h-full top-0 left-0 bottom-0 right-0 overflow-y-scroll'>
      <Header currentPage={'product'} />
      <div className="bg-white dark:bg-gray-800">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <ProductDetails productId={pId} />

        </div>
      </div>
    </section>
  )
}

