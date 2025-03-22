// Product Page

import ProductClient from '@/_client/ProductClient';
import { fetchDataBySlug } from '@/_store/DataStore';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {  
    const { slug } = await params; 
    if ( slug.trim().length === 0 ) {
        throw new Error("Invalid product");
    }
    try {
      const product = await fetchDataBySlug( "products" , slug ); 

      return {
        title: `${product.name} - Card Store`,
        description: `Buy ${product.name} for NPR ${product.price}.`,
        openGraph: {
          title: `${product.name} - Card Store`,
          description: `Buy ${product.name} for NPR ${product.price}.`,
          url: product.permalink,
          siteName: "Card Store",
          images: product.images[0]
            ? [{
                url: product.images[0].src,
                width: 189,
                height: 266,
                alt: product.images[0].alt || product.name,
              }]
            : [],
          type: "website",
        },
        twitter: {
          card: "summary_large_image",
          title: `${product.name} - Card Store`,
          description: `Buy ${product.name} for NPR ${product.price}.`,
          images: product.images.length > 0 ? [product.images[0].src] : [],
        },
        alternates: {
          canonical: `replace with actual url paxi`,
        },
      };
    } catch (error) {
        console.error(error);
        notFound();
    }
}


export default async function ProductPage({ params }) {
    const { slug } = await params; 

    if ( slug.trim().length === 0 ) {
        notFound();
    }

    return <ProductClient slug={slug} />;
}
