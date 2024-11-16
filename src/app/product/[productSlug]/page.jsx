// Product Page

import Header from '@/app/_components/Header';
import ProductDetails from './_ProductDetails';
import BreadCrumb from '@/app/_components/BreadCrumb';

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
  const { productSlug } = await params;

  return (
    <section id="product" className='w-full h-full mb-16'>
      <Header currentPage={'product'} />
      <div className="bg-white dark:bg-gray-800">
        <BreadCrumb />
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

          <ProductDetails productSlug={productSlug} />
        </div>
      </div>
    </section>
  )
}

